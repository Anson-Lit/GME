const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session"); // This provides us with session. Need to install
const path = require("path");
const port = process.env.port || 8000;

const app = express();

app.get("/test", (req, res) => {
    res.contentType("text/html");
    res.send("<h1>send this text</h1>")
})

app.listen(port, () => {
    console.log(`Server has stared on port ${port}`)
})