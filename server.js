var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var PORT = process.env.PORT || 7000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./routes/routes.js");
app.use("/", router);

app.listen(PORT, function () {
    console.log("Listening on port " + PORT)
});