const { Mongoose } = require("mongoose");
const workout = require("../models/workout");

module.exports = app => {
  app.get("/api/workouts", (req, res) => {
    workout.find({}).then(data => {
      console.log("GET: /api/workouts\n");
      res.json(data);
    });
  });
  
  app.put("/api/workouts/:id", (req, res) => {    
    workout.findByIdAndUpdate(req.params.id, {$push: { exercises: req.body } }).then(data => {
      console.log("PUT: /api/workouts/:id\n");
      res.json(data);
    });
  });

  app.post("/api/workouts", (req, res) => {
    workout.create(req.body).then(data => {
      res.json(data);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    workout.find({}).then(data =>
      res.send(JSON.stringify(data)));
  });
};
