const router = require("express").Router();
const Workout = require("../models/workout.js");

// Get all workouts
router.get("/api/workouts", function(req, res) {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
});

// Create new workout
router.post("/api/workouts/", function(req, res) {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout)
            console.log("New workout", dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
});

// Update an exercise to a workout
router.put("/api/workouts/:id", (req, res)=>{
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.json(err)
    })
})

// Get the last 7 days workout. Display the data in the Dashboard
router.get("/api/workouts/range", (req, res)=>{
    Workout.aggregate([{ $addFields: { totalDuration: { $sum:"$exercise.duration" } } }])
        .sort({ _id: -1 })
        .limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout)
        }).catch( err => {
            res.json(err)
        })
})

module.exports = router;    