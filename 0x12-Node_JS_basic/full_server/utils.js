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

async function readDatabase(path) {
  // eslint-disable-next-line prefer-const
  let msg = [];
  let data;
  try {
    data = await readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const csv = csvJSON(data);

  msg.push('This is the list of our students\n');
  const cs = [];
  const swe = [];
  csv.forEach((item) => {
    if (item.field === 'CS') {
      cs.push(item.firstname);
    } else {
      swe.push(item.firstname);
    }
  });

  msg.push(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`);

  msg.push(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}\n`);
  return msg;
}

module.exports = readDatabase;
