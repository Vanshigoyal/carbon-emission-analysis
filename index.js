const express = require("express");
const app = express();
const {generateCharts} = require("./models/dataModel");
const PORT = process.env.PORT || 8000;

app.get('/graphs', (req, res) => {
    generateCharts(req, res);
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));














