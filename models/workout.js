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
}, { 
    //include virtuals in res.json() when we request data
    toJSON: { virtuals: true } 
});

// add new property to schema
workoutSchema.virtual("totalDuration").get(function () {
    // Reduce the array of exercices to the total amount of duration
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    });
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;