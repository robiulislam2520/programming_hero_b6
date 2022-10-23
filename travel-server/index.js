// import external file
const express = require('express');
const cors = require('cors');

// create a app
const app = express();

// PORT
const port = process.env.PORT || 5000;

// use middleware
app.use(cors())

// routes
app.get('/health', (req, res)=>{
    res.send({message: 'Server health is good'})
})

// app listen http://localhost:5000/health
app.listen(port, () => {
    console.log('server is running on ', port)
})