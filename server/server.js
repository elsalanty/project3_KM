const express = require("express");
//const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
//const cors = require("cors");

const mongoose = require("mongoose");
//const apbioRoutes = express.Router();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

//app.use(cors());
app.use(bodyParser.json());
const routes = require("./routes");
//start mongo from the terminal. you have mongod already running int he background. get the number from the command line. More information found in the tutorial called The MERN Stack tutorial: building a React CRUD appplication part 2
mongoose.connect("mongodb://127.0.0.1:27017/apbio", { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB connection established");
});

//API or authentation routes
//app.use("/users", require("./routes/api/users"));

//every other request goes to React for routing
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
