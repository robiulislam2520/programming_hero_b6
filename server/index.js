// External import
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');

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

    const user = {
      name: "Nasim Biswas",
      email: "nasim@gmail.com"
    }

    const result = await userCollection.insertOne(user);


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