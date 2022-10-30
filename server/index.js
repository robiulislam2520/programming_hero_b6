// External import
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// Create a app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json())


// Database connection
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster1.ftnnc4j.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    const userCollection = client.db("nodeMongoCrud").collection("users");

  
    // get all users
    app.get('/users', async(req, res)=>{
      const query = {};
      const result = await userCollection.find(query).toArray();
      res.send(result)
    })
    // get single user
    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const user = await userCollection.findOne(query);
      res.send(user);
  })
    // POST route
    app.post('/users', async (req, res) =>{
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result)
    })
    // delete item
    app.delete('/users/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id : ObjectId(id)};
      const result = await userCollection.deleteOne(query);
      res.send(result)
    })

    // Update user
    app.put('/users/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const user = req.body;
      const option = {upsert: true};
      const updatedUser = {
          $set: {
              name: user.name,
              address: user.address,
              email: user.email
          }
      }
      const result = await userCollection.updateOne(filter, updatedUser, option);
      res.send(result);
  })


  } finally {
    // await client.close();
  }
}
run().catch(err => console.log(err.message));




// Routes
app.get("/health", (req, res) => {
  res.json({ message: "Server health is good" });
});
app.get("/", (req, res) => {
  res.send("<h1>CRUD application server</h1>");
});

// App listen on http://localhost:5000
app.listen(port, () => {
  console.log("server is running on port", port);
});