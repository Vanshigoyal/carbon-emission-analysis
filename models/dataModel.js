const XLSX = require("xlsx");

class DataModel {
  static writeDataToExcel(jsonData) {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "data.xlsx");
  }
}

module.exports = DataModel;
