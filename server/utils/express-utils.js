const cors = require("cors")
const express = require("express")
require("dotenv").config();

// Cors options to allow requests
const corsOptions = {
    origin: process.env.CORS_ALLOW_URL,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
};

// Sets up different utils in the server
function expressUtils(app) {
    app.use(express.json());
    app.use(cors(corsOptions))
}

module.exports = expressUtils