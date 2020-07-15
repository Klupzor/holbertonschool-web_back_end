const fs = require('fs');
const util = require('util');
const express = require('express');

const app = express();
const port = 1245;
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

async function countStudents(path) {
  // eslint-disable-next-line prefer-const
  let msg = [];
  let data;
  try {
    data = await readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const csv = csvJSON(data);

  msg.push(`Number of students: ${csv.length}\n`);
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

  msg.push(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  return msg;
}

app.get('/', (req, res) => res.send('Hello Holberton School!'));
app.get('/students', async (req, res) => {
  let data;
  res.write('This is the list of our students\n');
  try {
    data = await countStudents(process.argv[2]);
    data.forEach((el) => {
      res.write(el);
    });
    res.statusCode = 200;
    res.end();
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(port);

module.exports = app;
