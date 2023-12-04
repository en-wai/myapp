// Create a variable called express that imports the express func
const express = require('express');

// Create a variable called app which contains an instance of express
const app = express();

// Create a variable called port and set it to 3000.
const port = 3000;

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello NY!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
