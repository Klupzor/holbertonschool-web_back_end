const readDatabase = require('../utils');

module.exports = class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(process.argv[2]);
      return res.send(data.join(''));
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    let data; let msg;
    try {
      data = await readDatabase(process.argv[2]);
    } catch (error) {
      return res.status(500).send(error.message);
    }
    switch (major) {
      case 'CS':
        msg = data[1].split('List');
        return res.send(`List${msg[1]}`);

      case 'SWE':
        msg = data[2].split('List');
        return res.send(`List${msg[1]}`);

      default:
        return res.status(500).send('Major parameter must be CS or SWE');
    }
  }
};
