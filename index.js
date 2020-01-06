const express = require('express');

const app = express();

app.use('/', function(res, req, next) {
    console.log(`A new request was received at ${new Date().toLocaleString()}.`);
}); // Means "This route... (Default route)"

const port = 8888;

app.listen(port, () => {
    console.log(`Server is up and running on ${port}.`);
    res.send(`Hello World.`);
});

