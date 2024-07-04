const dataModel = require("../models/dataModel");

const emissionDataHandler = (jsonData) => {
   const status =  dataModel.writeDataToExcel(jsonData);
    console.log(status);
};

module.exports = {
  emissionDataHandler,
};
