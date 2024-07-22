const sequelize = require("../database");
const { Youtuber } = require("../database");
// const { analytics_data } = require("./bigDataLogic");

async function insertDataInChunks(dataArray, chunkSize) {
  for (let i = 0; i < dataArray.length; i += chunkSize) {
    const chunk = dataArray.slice(i, i + chunkSize);
    await Youtuber.bulkCreate(chunk, { ignoreDuplicates: true });
  }
}

const chunkSize = 50000;

insertDataInChunks(analytics_data, chunkSize)
  .then(() => {
    console.log("All data inserted successfully");
    sequelize.close();
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
    sequelize.close();
  });

// module.exports = {
//   insertDataInChunks,
// };
