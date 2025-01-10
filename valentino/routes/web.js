// import modul express
const express = require('express');

// membuat instance express
const app = express();

// Menentukan port untuk dijalankan
const port = 3000;

// define route
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/example", (req, res) => {
    res.status(200).send("Hello World dunia tipu tipu");
});


// Menjalankan server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});