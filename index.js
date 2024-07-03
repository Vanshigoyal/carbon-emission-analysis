const express = require('express');
const emissionRoutes = require('./routes/dataRoutes')
const app = express();
require('./excel');

const PORT = process.env.PORT || 8000;

app.use('/emission', emissionRoutes);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));


