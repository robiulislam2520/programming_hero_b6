// External import
const express = require('express');
const cors = require('cors');

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



// Routes
app.get('/health', (req, res) =>{
    res.json({"message" : "Server health is good"})
})
app.get('/', (req, res) =>{
    res.send("<h1>Node js server is running</h1>")
})
app.get('/users', (req, res) =>{
    if(req.query.name){
        const search = req.query.name;
        const filtered = users.filter(usr => usr.name.toLocaleLowerCase().indexOf(search) >= 0);

        res.send(filtered);
    } else{
        res.json(users)
    }
})

app.post('/user', (req, res) =>{
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);

    res.json(users);
})

// App listen on http://localhost:5000
app.listen(port, ()=>{
    console.log("server is running on port" , port);
})