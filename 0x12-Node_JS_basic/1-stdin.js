const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Welcome to Holberton School, what is your name?\n');
rl.prompt();
rl.on('line', (line) => {
  console.log(`Your name is: ${line}`);
  rl.close();
}).on('close', () => {
  console.log('This important software is now closing');
});
