const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

//configure dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/dist")));

// * root to serve project on different page routes except root '/'
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app listening on port ${port}`);
