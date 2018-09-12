// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ROUTER CONFIGURATION
require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

// LISTENER CONFIGURATION
app.listen(PORT, function () {
    console.log("app listening on PORT: " + PORT);
});