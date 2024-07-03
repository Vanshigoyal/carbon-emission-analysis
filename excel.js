const axios = require('axios');
const XLSX = require('xlsx');

async function fetchData() {
    try {
        const response = await axios.get('http://localhost:8000/emission');
        return response.data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
}


function writeDataToExcel(data) {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

    XLSX.writeFile(workbook, 'data.xlsx');
}

(async () => {
    const data = await fetchData();
    if (data) {
        writeDataToExcel(data);
        console.log('Data written to Excel file successfully.');
    }
})();
