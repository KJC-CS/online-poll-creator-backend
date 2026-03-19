// Import Statement
const express = require("express");

const app = express(); // object

// middleware
app.use(express.json());

// Endpoint /
app.get("/", (req, res) => {
  res.send("Welcome to Polling App 1.0");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
