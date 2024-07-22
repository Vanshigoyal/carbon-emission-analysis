const jsonData = require("./CO2_emission.json");

function transformData(realData) {
  let result = {};
  let filteredData = realData.filter((item, index) => index < 20);
  filteredData.forEach((item) => {
    const country = item.Country;
    delete item.Country;
    delete item["Data source"];
    delete item.Sector;
    delete item.Gas;
    delete item.Unit;
    result[country] = { ...item };
    delete result['China']
  });
  return result;
}

function transformTitle(jsonData) {
  const titles = jsonData.map((countries) => countries.Country);
   titles.splice(0,1);
   return titles
}

function transformField(jsonData) {
  const field = Object.keys(jsonData[0]);
  field.splice(10, field.length)
  return field;
}

const titles = transformTitle(jsonData);
titles.splice(10, titles.length);
const emissionValue = transformData(jsonData);
const fields = transformField(jsonData);
let opts = {
  file: "chart.xlsx",
  chart: "column",
  titles: titles,
  fields: fields,
  data: emissionValue,
};

module.exports = opts;
