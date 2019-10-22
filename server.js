const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

//API or authentation routes
app.use("/users", require("./routes/users-routes"));

//every other request goes to React for routing
app.use(require("./routes/html-routes"));

// Send every request to the React app
// Define any API routes before this runs

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
