const express = require('express');
const app = express();
require("dotenv").config()
const platformManager = require('./bufferManager/platformManager.js');
const bufferFinder = require('./bufferManager/bufferFinder.js');
const port = process.env.PORT

app.use(express.json());

app.post('/video-url', (req, res) => {
    const data = req.body;
    console.log('Received url:', data);
    const platform = platformManager.platformIdentifier(data.url);
    const buffer = bufferFinder.videoBuffer(data.url, platform);
    if(platform == "err"){
        res.status(400).send({error: "Bad Request", message: "URL not valid, URL isn't correct either we don't support that website"});
    }
    else{
        res.status(200).send({url: buffer.bufferUrl, type: buffer.type, platform: platform});
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})