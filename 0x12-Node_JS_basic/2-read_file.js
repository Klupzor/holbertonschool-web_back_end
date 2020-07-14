const fs = require('fs');

function csvJSON(csv) {
  const lines = csv.split('\n');

  const result = [];
  const headers = lines[0].split(',');

  for (let i = 1; i < lines.length; i += 1) {
    const obj = {};
    const currentline = lines[i].split(',');
    if (currentline.length > 1) {
      for (let j = 0; j < headers.length; j += 1) {
        if (currentline[j] && currentline[j].length !== 0) {
          obj[headers[j]] = currentline[j];
        }
      }
      result.push(obj);
    }
  }
  return result;
}

module.exports = function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const csv = csvJSON(data);
    console.log(`Number of students: ${csv.length}`);
    const cs = [];
    const swe = [];
    csv.forEach((item) => {
      if (item.field === 'CS') {
        cs.push(item.firstname);
      } else {
        swe.push(item.firstname);
      }
    });
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  });
};
