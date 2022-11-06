// External import
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');

//dot env file
require('dotenv').config();

// Create a app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json())


// Verify the user
app.post('/jwt', (req, res)=>{
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn: "1h"});
  res.send({token})
})

function verifyJWT(req, res, next){
    const header = req.headers.authorization;

    if(!header){
      return res.status(401).send({message: "Unauthorized User Access"})
    }

    const token = header.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, decoded){
        if(err){
          return res.status(401).send({message: "Unauthorized User Access"})
        }
        req.decoded = decoded;
        next()
    })
}


// database connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster1.ftnnc4j.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
  try{
    const database = client.db("geniusCarProject");
    const servicesCollection = database.collection('services');
    const ordersCollection = database.collection('orders');

    // get all services
      app.get('/services', async (req, res) => {
        const query = {}
        const cursor = servicesCollection.find(query);
        const services = await cursor.toArray();
        res.send(services);
      });

      // Single Services
      app.get('/services/:id', async (req, res) => {
          const id = req.params.id;
          const query = { _id: ObjectId(id) };
          const service = await servicesCollection.findOne(query);
          res.send(service);
      });

      // Orders post api
      app.post('/orders', async (req, res) => {
        const order = req.body;
        const result = await ordersCollection.insertOne(order);
        res.send(result);
      });

      // Orders get api by single user
      app.get('/orders',verifyJWT, async (req, res) => {
        let query = {};

        if (req.query.email) {
            query = {
                email: req.query.email
            }
        }

        const cursor = ordersCollection.find(query);
        const orders = await cursor.toArray();
        res.send(orders);
      });

      // Orders status update
      app.patch('/orders/:id', async (req, res) => {
        const id = req.params.id;
        const status = req.body.status
        const query = { _id: ObjectId(id) }
        const updatedDoc = {
            $set:{
                status: status
            }
        }
        const result = await ordersCollection.updateOne(query, updatedDoc);
        res.send(result);
    })

    // Orders delete
    app.delete('/orders/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: ObjectId(id) };
        const result = await ordersCollection.deleteOne(query);
        res.send(result);
    })
  }
  finally{
    // await client.close()
  }
}
run().catch(err => console.dir(err))


// Routes
app.get("/health", (req, res) => {
  res.json({ message: "Server health is good" });
});

app.get("/", (req, res) => {
  res.send("<h1>Node server is running</h1>");
});

// App listen on http://localhost:5000
app.listen(port, () => {
  console.log("server is running on port", port);
});