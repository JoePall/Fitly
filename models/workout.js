const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: "Day is Required",
    default: Date.now
  },
  exercises: Array,
});

module.exports = mongoose.model("workout", WorkoutSchema);