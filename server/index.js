// External import
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

// dotenv file
require('dotenv').config()

// Create a app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// users
const users = [
    {id: 1, name: 'Robiul Islam', email: 'robiul@gmail.com'},
    {id: 2, name: 'Mizanr Rahman', email: 'mizan@gmail.com'},
    {id: 3, name: 'Limon hasan', email: 'limon@gmail.com'},
]


// Database connect


const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster1.ftnnc4j.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    const userCollection = client.db("simpleNode").collection("users");

    // get users
    app.get('/users', async (req, res) =>{
        const result = await userCollection.find().toArray();
        if(req.query.name){
            const search = req.query.name;
            const filtered = result.filter(usr => usr.name.toLocaleLowerCase().indexOf(search) >= 0);

            res.json(filtered);
        } else{
            res.json(result)
        }
        
    })    

    // Post user
    app.post('/user', async (req, res) =>{
        const user = req.body;
        const result = await userCollection.insertOne(user);
        res.json(result);
    })
    
    

}

run().catch(console.dir);



// Routes
app.get('/health', (req, res) =>{
    res.json({"message" : "Server health is good"})
})
app.get('/', (req, res) =>{
    res.send("<h1>Node js server is running</h1>")
})
// app.get('/users', (req, res) =>{
//     if(req.query.name){
//         const search = req.query.name;
//         const filtered = users.filter(usr => usr.name.toLocaleLowerCase().indexOf(search) >= 0);

//         res.send(filtered);
//     } else{
//         res.json(users)
//     }
// })




// App listen on http://localhost:5000
app.listen(port, ()=>{
    console.log("server is running on port" , port);
})