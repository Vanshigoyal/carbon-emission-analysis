const dataModel = require("../models/dataModel");

const emissionDataHandler = (jsonData) => {
  if (jsonData) {
    dataModel.writeDataToExcel(jsonData);
    console.log("Data written to Excel file successfully.");
  } else {
    console.error("Invalid data");
  }
};

module.exports = {
  emissionDataHandler,
};
