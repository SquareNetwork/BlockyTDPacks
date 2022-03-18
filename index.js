const app = require('express')();
const fs = require('fs');
require('dotenv').config();

app.get("/", function(req, res) {
    res.send("<h1>BlockyTD Pack Downloader by AstroSquared</h1>Download: /download/:version.zip")
});

app.get("/download/:version", function(req, res) {
    res.sendFile(__dirname + "/packs/BlockyTD." + req.params.version);
});

app.listen(process.env.PORT);
