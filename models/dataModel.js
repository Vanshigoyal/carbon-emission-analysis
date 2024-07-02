const fs = require('fs');
const emissionData = require("../CO2_emission.json")
console.log("emissionData", emissionData)
class DataModel {
    static getCarbonEmissionData() {
        return emissionData
    }
}