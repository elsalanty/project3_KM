const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

//const path = require("path");
const mongoose = require("mongoose");
const apbioRoutes = express.Router();
const PORT = process.env.PORT || 3001;

let User = require("./apbio.model");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

app.use(cors());
app.use(bodyParser.json());

//start mongo from the terminal. you have mongod already running int he background. get the number from the command line. More information found in the tutorial called The MERN Stack tutorial: building a React CRUD appplication part 2
mongoose.connect("mongodb://127.0.0.1:27017/apbio", { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB connection established");
});

//API or authentation routes
//app.use("/users", require("./routes/users-routes"));

//every other request goes to React for routing
//app.use(require("./routes/html-routes"));

// Send every request to the React app
// Define any API routes before this runs

//adding the endpoints:
// apbioRoutes.route("/").get(function(req, res) {
//   ApbioSchema.find(function(err, user) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(user);
//     }
//   });
// });

// apbioRoutes.route("/:id").get(function(req, res) {
//   let id = req.params.id;
//   ApbioSchema.findById(id, function(err, user) {
//     res.json(user);
//   });
// });

// apbioRoutes.route("/add").post(function(req, res) {
//   let user = new User(req.body);
//   user
//     .save()
//     .then(user => {
//       res.status(200).json({ user: "user added" });
//     })
//     .catch(err => {
//       res.status(400).send("adding user failed");
//     });
// });

// apbioRoutes.route("/update/:id").put(function(req, res) {
//   ApbioSchema.findById(req.params.id, function(err, user) {
//     if (!user) res.status(404).send("data not found");
//     else user.apbio_userName = req.body.apbio_userName;
//     user.apbio_module1Complete = req.body.apbio_module1Complete;
//     user.apbio_module1grade = req.body.apbio_module1grade;
//     user.apbio_module2Complete = req.body.apbio_module2Complete;
//     user.apbio_module2grade = req.body.apbio_module2grade;

//     user
//       .save()
//       .then(user => {
//         res.json("User Updated");
//       })
//       .catch(err => {
//         res.status(400).send("Update not possible");
//       });
//   });
// });

// //connecting to the middleware
// app.use("/apbios", apbioRoutes);

//listening

app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
