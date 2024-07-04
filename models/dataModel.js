const XLSX = require("xlsx");

class DataModel {
  static writeDataToExcel(jsonData) {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Emission-Data");
    XLSX.writeFile(workbook, "data.xlsx");
    return "Data written to Excel file successfully."
  }
}

module.exports = DataModel;
