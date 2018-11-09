// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var app = express();
require("./routes/routes.js")(app)
app.use(express.static( __dirname + '/public/dist/public' ));
app.listen(8000, function() {
  console.log("listening on port 8000");
})
