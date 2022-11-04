// External import
const express = require("express");
const cors = require("cors");

// Create a app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());

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