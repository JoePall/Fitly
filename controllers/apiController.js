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
    console.log(req.body);
    workout.findByIdAndUpdate(req.params.id, {$push: { exercises: req.body } }).then(data => {
      console.log("PUT: /api/workouts/:id\n");
      res.json(data);
    });
  });

  app.post("/api/workouts", (req, res) => {
    console.log("POST: /api/workouts\n");
    console.dir(req.body);

    workout.create(req.body);
  });

  app.get("/api/workouts/range", (req, res) => {
    workout.find({}).then(data => {
      console.log(data);
      res.send(JSON.stringify(data));
    });
  });
};
