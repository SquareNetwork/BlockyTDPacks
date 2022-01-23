const app = require('express')();
const fs = require('fs');
require('dotenv').config();

app.get("/", function(req, res) {
    res.send("<h1>BlockyTD Pack Downloader by AstroSquared</h1>Latest: /download <br>Version: /download/:version")
});

app.get("/download", function(req, res) {
    var latest = fs.readFileSync(__dirname + "/packs/latest.txt").toString();
    res.sendFile(__dirname + "/packs/BlockyTD." + latest + ".zip");
});

app.get("/download/:version", function(req, res) {
    res.sendFile(__dirname + "/packs/BlockyTD." + req.params.version + ".zip");
});

app.listen(process.env.PORT);