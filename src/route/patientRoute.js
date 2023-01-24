const PatientController = require('../controller/patientController.js');
const { body } = require("express-validator");
const { Router } = require( "express");
const PatientRoute = Router();

PatientRoute.post("/registerPatient",
[
body("id").isString().exists({ checkFalsy: true })
.isLength({max: 20}).matches(/^\d+$/)
.withMessage('id is required, string type, only numbers and must have a maximum of 20 characters '),
body("firstname").isString().exists({ checkFalsy: true })
.isLength({max: 255}).withMessage('firstname is required and must have a maximum of 255 characters '),
body("lastname").isString().exists({ checkFalsy: true })
.isLength({max: 255}).withMessage('lastname is required and must have a maximum of 255 characters '),
body("email").isEmail().exists({ checkFalsy: true })
.isLength({max: 255}).withMessage('email is required and must have a maximum of 255 characters '),
body("phone").isString().exists({ checkFalsy: true })
.isLength({max: 20}).withMessage('phone is required, string type, and must have a maximum of 20 characters '),
], 
PatientController.registerPatient);

PatientRoute.get("/getPatient/:id", PatientController.getPatient);

module.exports = PatientRoute;