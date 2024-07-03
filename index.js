const express = require("express");
const app = express();
const emissionJsonData = require("./CO2_emission.json");
const dataController = require("./controllers/dataController");

const PORT = process.env.PORT || 8000;

if (!emissionJsonData.length) throw new Error("Data not found");

dataController.emissionDataHandler(emissionJsonData);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
