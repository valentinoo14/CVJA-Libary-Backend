const express = require('express');
const allRoutes = require("./routes/web");
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/cvjalibary", allRoutes);


// Menjalankan server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
