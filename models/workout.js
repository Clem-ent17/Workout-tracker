const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: true
            },
            type: {
                type: String,
                trim: true,
                required: true
            },
            weight: Number,
            sets: Number,
            reps: Number,
            duration: Number,
            distance: Number
        }
    ]  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;