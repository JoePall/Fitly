"use strict";

const fs = require("fs");
const { Mongoose } = require("mongoose");
const path = require("path");
const basename = path.basename(module.filename);
const db = {};

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = Mongoose.import(path.join(__dirname, file));
    db[model.name] = model;
  });

module.exports = db;
