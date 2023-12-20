//set up server and call routes
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = 3001;
const app = express();

//express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//mongoose listening
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});