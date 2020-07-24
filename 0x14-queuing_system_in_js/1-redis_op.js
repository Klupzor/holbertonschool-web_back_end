const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
  console.error(`Redis client not connected to the server: ${error}`);
});
console.log("Redis client connected to the server");

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
  
}

function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, replay) => {
    console.log(replay)
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
