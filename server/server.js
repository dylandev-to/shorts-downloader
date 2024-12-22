const express = require('express');
const app = express();

// Environment Variables
require("dotenv").config()
const {
    PORT
} = process.env;

// Express Utils
app.use(express.json());

// Router
app.use("/", require("./routes/router"));

app.listen(PORT || 3000, () => {
    console.log(`Running server on: ${PORT}`)
})