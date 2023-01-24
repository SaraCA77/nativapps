const database = require("../repository");

class PatientService {
  static async insertPatient(bodyPatient) {
    try {
      return await database.paciente.create(bodyPatient);
    } catch (error) {
      return false;
    }
  }

  static async findPatient(id) {
    try {
      return await database.paciente.findOne({
        where: {
          id: id,
        },
      });
    } catch (error) {
      return false;
    }
  }
}

module.exports = PatientService;
