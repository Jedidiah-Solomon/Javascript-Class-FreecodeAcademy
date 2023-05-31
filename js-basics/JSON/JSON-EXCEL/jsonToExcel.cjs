const fs = require('fs');
const XLSX = require('xlsx');

// Read the JSON file
const jsonData = fs.readFileSync('employeeInfo.json', 'utf-8');

// Parse the JSON data
const data = JSON.parse(jsonData);

// Create a new workbook
const workbook = XLSX.utils.book_new();

// Create a new worksheet
const worksheet = XLSX.utils.aoa_to_sheet([
  ['First Name', 'Last Name', 'Age', 'ID', 'Position', 'State'], // Row header
]);

// Add employee details to the worksheet
data.forEach((employee, index) => {
  const rowIndex = index + 2; // Adjusted index to account for the header row
  XLSX.utils.sheet_add_aoa(worksheet, [
    [
      employee.firstName,
      employee.lastName,
      employee.age,
      employee.id,
      employee.position,
      employee.state
    ]
  ], { origin: `A${rowIndex}` });
});

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');

// Write the workbook to an Excel file
XLSX.writeFile(workbook, 'employee.xlsx');

console.log('Conversion completed successfully.');
