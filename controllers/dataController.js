const dataModel = require('../models/dataModel');

const carbonEmissionData = (req, res) => {
    const data = dataModel.carbonEmissionData();
    res.status(200).json(data);
}

module.exports = {
    carbonEmissionData
}

