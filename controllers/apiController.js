const { Mongoose } = require("mongoose");
const workout = require("../models/workout");

module.exports = app => {
  app.get("/api/workouts", (req, res) => {
    workout.find({}).then(data => {
      res.json(data);
    });
  });
  
  app.put("/api/workouts/:id", (req, res) => {
    workout.update({ where: { id: req.params.id } }, req.body).then(data => {
      res.json(data);
    });
  });
  
  app.post("/api/workouts", (req, res) => {
    workout.find({}).then(data => {
      workout.create(req.body);
    });
  });

  // app.get("/api/workouts/range", (req, res) => {
  //   workout.find({ where { }}).then(data => {
  //     workout.create(req.body);
  //   });
  // });
  
  app.get("/api/stats", (req, res) => {
    res.render("stats");
  });
};


