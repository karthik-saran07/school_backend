const express = require('express')
const route = express.Router();
const { addSchool, listSchool, deleteSchool, getAllSchool } = require('../Controller/schoolController')

route.post("/addSchool", addSchool);
route.get("/listSchool", listSchool);
route.get("/getAllSchool", getAllSchool)
route.delete("/deleteSchool", deleteSchool)

module.exports = route;

