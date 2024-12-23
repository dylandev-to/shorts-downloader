const cors = require("cors")
const express = require("express")

// Cors options to allow requests
const corsOptions = {
    origin: 'http://localhost:5173',
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