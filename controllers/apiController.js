const { Mongoose } = require("mongoose");
const workout = require("../models/workout");

module.exports = app => {
  app.get("/api/workouts", (req, res) => {
    workout.find({}).then(data => {
      console.log("GET: /api/workouts\n\n" + data);
      res.json(data);
    });
  });
  
  app.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    workout.findByIdAndUpdate(req.params.id, {$push: { exercises: req.body } }).then(data => {
      console.log("PUT: /api/workouts/:id\n\n");
      res.json(data);
    });
  });
  
  app.post("/api/workouts", (req, res) => {
    console.log("POST: /api/workouts\n\n" + req.body);
    console.dir(req.body);

    workout.create(req.body);
  });

  app.get("/api/workouts/range", (req, res) => {
    console.log("GET: /api/workouts/range\n\n" + req.body);
    workout.find({}).then(data => {
      res.json(data);
    });
  });
  
  app.get("/api/stats", (req, res) => {
    workout.find({}).then(data => {
      console.log("GET: /api/stats\n\n" + data);
      
      res.render("stats");
    });
  });
};
