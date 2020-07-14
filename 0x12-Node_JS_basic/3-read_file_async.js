const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

function csvJSON(csv) {
  const lines = csv.split('\n');

  const result = [];
  const headers = lines[0].split(',');

  for (let i = 1; i < lines.length; i += 1) {
    const obj = {};
    const currentline = lines[i].split(',');

    for (let j = 0; j < headers.length; j += 1) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }
  return result;
}

module.exports = async function countStudents(path) {
  try {
    const data = await readFile(path, 'utf8');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
