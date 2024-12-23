const express = require('express');
const expressUtils = require("./utils/express-utils")
const app = express();

// Environment Variables
require("dotenv").config()
const {
    PORT
} = process.env;

// Express Utils
expressUtils(app);

// Router
app.use("/", require("./routes/router"));

// Starts the app
app.listen(PORT || 3000, () => {
    console.log(`Running server on: ${PORT}`)
})