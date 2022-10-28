# Module 64 - Server side Node JS and Express

## 1. Node Js is a Single tread and non-blocking, Javascript Run time and have huge packages. 1997 to 2009 Javascript use Client side, Ryan Dhal, who is the creator of node js. He taught that we are use javascript as a client side language why we will not use as backend or server side language. Browser run a Javascript Engine, Chrome have V8 engine. V8 engine is a free and open source project, so Ryan dhal use V8 engine as a backend. Then bump Javascript, and then we are use Node js.

## 2. Node js and then coming a Node js Framework, Express js. It's also get easy to use and server side app.

## 3. Then coming mongodb and mongoose, it's easy to use and also easy our life. It's not time consuming its save our time.

Initial code
// External import
const express = require('express');
const cors = require('cors');

        // Create a app
        const app = express();
        const port = process.env.PORT || 5000;

        // Middleware
        app.use(cors());

        // Routes
        app.get('/health', (req, res) =>{
            res.json({"message" : "Server health is good"})
        })

        // App listen on http://localhost:500
        app.listen(port, ()=>{
            console.log("server is running on port" , port);
        })
