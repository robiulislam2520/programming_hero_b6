// External import
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
var jwt = require("jsonwebtoken");
require("dotenv").config();

// Create a app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// data base

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster1.ftnnc4j.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// jwt verify token
function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "Unauthorized user" });
  }
  const token = authHeader.split(" ")[1];
  console.log(token);

  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
    if (err) {
      return res.status(403).send({ message: "forbidden access" });
    }
    req.decoded = decoded;
    next();
  });
}

async function run() {
  try {
    const database = client.db("doctorsPortal");
    const appointmentCollection = database.collection("appointmentCollections");
    const bookingCollection = database.collection("bookingsCollection");
    const usersCollection = database.collection("users");
    const doctorsCollection = database.collection("doctors");

    // get all appointments
    app.get("/appointments", async (req, res) => {
      const date = req.query.date;
      const appointmentOption = await appointmentCollection.find({}).toArray();
      const dateQuery = { appointmentDate: date };
      const alreadyBooked = await bookingCollection.find(dateQuery).toArray();

      appointmentOption.forEach((option) => {
        const optionBooked = alreadyBooked.filter(
          (book) => book.treatment === option.name
        );

        const bookedSlots = optionBooked.map((book) => book.slot);
        const remainingSlots = option.slots.filter(
          (slot) => !bookedSlots.includes(slot)
        );
        option.slots = remainingSlots;
      });
      res.send(appointmentOption);
    });

    // get bookings
    app.get("/bookings", async (req, res) => {
      const email = req.query.email;

      const query = { email: email };
      const bookings = await bookingCollection.find(query).toArray();
      res.send(bookings);
    });

    // post bookings
    app.post("/bookings", async (req, res) => {
      const booking = req.body;
      const query = {
        appointmentDate: booking.appointmentDate,
        email: booking.email,
        treatment: booking.treatment,
      };
      const alreadyBooked = await bookingCollection.find(query).toArray();

      if (alreadyBooked.length) {
        const message = `You already have a booking on ${booking.appointmentDate}`;
        return res.send({ acknowledged: false, message });
      }

      const result = await bookingCollection.insertOne(booking);
      res.send(result);
    });

    // delete a appointment
    app.delete("/bookings/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await bookingCollection.deleteOne(query);
      res.send(result);
    });

    // doctor specilaty
    app.get('/appointmentSpecialty', async(req, res)=>{
      const result = await appointmentCollection.find({}).project({name: 1}).toArray();
      res.send(result)
    })

    // JWT Token generate
    app.get("/jwt", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      if (user) {
        const token = jwt.sign({ email }, process.env.JWT_ACCESS_TOKEN, {
          expiresIn: "1h",
        });
        return res.send({ accessToken: token });
      }
      res.status(403).send({ accessToken: "" });
    });

    // Users Routes
    app.get("/users", async (req, res) => {
      const query = {};
      const users = await usersCollection.find(query).toArray();
      res.send(users);
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.get("/users/admin/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const user = await usersCollection.findOne(query);
      res.send({ isAdmin: user?.role === "admin" });
    });
    app.put("/users/admin/:id", async (req, res) => {
      // const decodedEmail = req.decoded.email;
      // const query = { email: decodedEmail };
      // const user = await usersCollection.findOne(query);

      // if (user?.role !== "admin") {
      //   return res.status(403).send({ message: "forbidden access" });
      // }

      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          role: "admin",
        },
      };
      const result = await usersCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    // doctors collection
    app.get("/doctors", async(req, res)=>{
      const doctor = await doctorsCollection.find({}).toArray();
      res.send(doctor)
    })
    app.post("/doctors", async(req, res)=>{
      const doctor = req.body;
      const result = await doctorsCollection.insertOne(doctor);
      res.send(result)
    })
    app.delete('/doctors/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const result = await doctorsCollection.deleteOne(filter);
      res.send(result);
  })
  } finally {
  }
}

run().catch((err) => console.log(err));

// Routes
app.get("/health", (req, res) => {
  res.json({ message: "Server health is good" });
});
app.get("/", (req, res) => {
  res.send("<h1>Doctors Portal server is running</h1>");
});

// App listen on http://localhost:5000
app.listen(port, () => {
  console.log("server is running on port", port);
});
