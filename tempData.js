const jsonData = require('./CO2_emission.json');

function transformData(realData) {
    let result = {};
    let filteredData = realData.filter((item, index)=> index < 20)
    filteredData.forEach(item => {
            const country = item.Country;
            delete item.Country;
            delete item['Data source'];
            delete item.Sector;
            delete item.Gas;
            delete item.Unit;
            result[country] = { ...item };
        });
        return result;   
}

function transformTitle(jsonData) {
    const titles = jsonData.map(countries => countries.Country)
    return titles
}

function transformField(jsonData) {
    const field = Object.keys(jsonData[0])
    return field
}

const titles = transformTitle(jsonData);
titles.splice(20, titles.length)
const emissionValue = transformData(jsonData);
const fields = transformField(jsonData);

let opts = {
    file: "chart.xlsx",
    chart: "column",
    titles: titles,
    fields: fields,
    data: emissionValue
};

module.exports = opts;