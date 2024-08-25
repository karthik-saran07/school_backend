const express = require('express')
const route = express.Router();
const { createSchool, getNearbySchool, deleteSchool, getAllSchool } = require('../Controller/schoolController')

route.post("/createSchool", createSchool);
route.post("/getNearbySchool", getNearbySchool);
route.get("/getAllSchool", getAllSchool)
route.delete("/deleteSchool", deleteSchool)

module.exports = route;

