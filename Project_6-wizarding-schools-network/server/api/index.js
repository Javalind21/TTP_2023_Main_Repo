"use strict";
const router = require("express").Router();

// require your database and place your routes here
const {Student, School} = require("../index");

router.get("/School", async (req, res, next) => {
    try {
        const allSchools = await School.findAll();
        res.send(allSchools);
    }
    catch (err) {
        next(err);
    }
});

router.get("/Student", async (req, res, next) => {
    try {
        const AllStudents = await Student.findAll();
        res.send(AllStudents);
    }
    catch (err) {
        next(err);
    }
});


module.exports = router;
