const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const handlebars = require("express-handlebars");
const PORT = process.env.PORT || 3000
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// get all controllers
fs.readdirSync("./controllers")
  .filter(file => file.indexOf(".") !== 0 && file.slice(-3) === ".js")
  .forEach(file => require("./controllers/" + file)(app));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});