const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

client.on("error", function(error) {
  console.error(`Redis client not connected to the server: ${error}`);
});
console.log("Redis client connected to the server");

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
  
}

async function displaySchoolValue(schoolName) {
  try {
    console.log(await getAsync(schoolName))
  } catch (error) {
    console.error(error)
  }
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
