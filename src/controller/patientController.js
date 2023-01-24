const PatientService = require( "../service/patientService.js");
const { validationResult } = require("express-validator");


class PatientController {
  static async registerPatient(req, res) {

    let response;

    const patientRequest = req.body;

    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res
          .status(400)
          .json(errors);
          //.json({ code: 'P003', message: 'Invalid or missing parameters' });
        return;
      }

    try {
      const findPatient = await PatientService.findPatient(patientRequest.id)
      if(findPatient !== null){
        response = {
          status: 400,
          code: "P005",
          message: "This patient already exist",
          type: "error",
          data: {},
        };
      return res.send(response)
      }
      const createPatient = await PatientService.insertPatient(patientRequest);
      if (createPatient.id) {
        response = {
          status: 200,
          code: "P001",
          message: "Patient created successfully",
          type: "success",
          data: {
            patientRequest
          }
        }
      } else {
        response = {
          status: 500,
          code: "P002",
          message: "Error creating patient",
          type: "error",
          data: {},
        };
      }
      return res.send(response)
    } catch (error) {
      console.log(error);
    }
  }

  static async getPatient(req, res) {
    let response;
    try {
    const findPatient = await PatientService.findPatient(req.params.id)
      if(findPatient !== null){
        response = {
          status: 200,
          code: "P001",
          message: "Data Found",
          type: "success",
          data: {findPatient},
        }
      }else{
        response = {
          status: 400,
          code: "P006",
          message: "Data Not Found",
          type: "error",
          data: {},
        }
      }
      return res.send(response)
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = PatientController
