const fs = require("fs");
const emissionData = require("../CO2_emission.json");
class DataModel {
  static carbonEmissionData() {
    return emissionData;
  }
}

module.exports = DataModel;
