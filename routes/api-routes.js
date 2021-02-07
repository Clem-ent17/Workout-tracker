const router = require("express").Router();
const Workout = require("../models/workout.js");

// Get all workouts
router.get("/api/workouts", function(req, res) {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Create new workout
router.post("/api/workouts/", function(req, res) {
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
    res.status(400).json(err);
    });
});


    // add an exercise to an existing workout
    // app.put("/api/workouts/:id", function(req, res) {
    //     //ERROR HERE
    //     db.Workout.find({ _id: mongojs.ObjectId(req.params.id) }, (error, found) => {
    //         if (error) {
    //             console.log(error);
    //         } else {
    //             console.log(found);
    //             const newExercise = req.body;
    //             console.log(newExercise);
    //             const exerciseList = found[0].exercises;
    //             exerciseList.push(newExercise);
    //             db.Workout.updateOne(
    //                 {
    //                     //ERROR HERE
    //                     _id: mongojs.ObjectId(req.params.id)
    //                 },
    //                 {
    //                     $set: {
    //                         exercises: exerciseList
    //                     }
    //                 },
    //                 (error, edited) => {
    //                     if (error) {
    //                         console.log(error);
    //                     } else {
    //                         res.send(edited);
    //                     }
    //                 }
    //             );
    //         }
    //     });
    // });


    // only return the last 7 workouts
    // app.get("/api/workouts/range", function(req, res) {
    //     db.Workout.find({}).then(function(dbWorkouts) {
    //         while(dbWorkouts.length > 7) {
    //             let first = dbWorkouts.shift()
    //         }
    //         res.json(dbWorkouts);
    //     });
    // });

module.exports = router;    