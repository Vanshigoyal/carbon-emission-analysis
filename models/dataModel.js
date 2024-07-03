const fs = require("fs");
const emissionData = require("../CO2_emission.json");
console.log("emissionData", emissionData[0]);
class DataModel {
  static carbonEmissionData() {
    return emissionData;
  }
}

module.exports = DataModel;
