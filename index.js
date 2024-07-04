const express = require("express");
const app = express();
const emissionJsonData = require("./CO2_emission.json");
const dataController = require("./controllers/dataController");
const DataModel = require("./models/dataModel");

const PORT = process.env.PORT || 8000;

if (!emissionJsonData.length) throw new Error("Data not found");

dataController.emissionDataHandler(emissionJsonData);

app.get('/graphs', (req, res) => {
    DataModel.generateCharts(req, res)
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));














