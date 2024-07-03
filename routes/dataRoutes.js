const express = require('express');
const datController = require('../controllers/dataController');
const router = express.Router();

router.route("/").get(datController.carbonEmissionData);

module.exports = router;