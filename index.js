const express = require("express");
const app = express();
const XLSXChart = require("xlsx-chart");
const xlsxChart = new XLSXChart();
const opts = require('./tempData');

const PORT = process.env.PORT || 8000;

app.get("/download", (req, res) =>  {
    xlsxChart.generate(opts, function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send("Error generating chart");
          return;
        }
        res.set({
          "Content-Type": "application/vnd.ms-excel",
          "Content-Disposition": "attachment; filename=chart.xlsx",
          "Content-Length": data.length,
        });
        res.status(200).send(data);
      });
});


app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
