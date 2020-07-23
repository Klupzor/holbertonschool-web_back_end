const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
  console.error(`Redis client not connected to the server: ${error}`);
});
console.log("Redis client connected to the server");
// client.set("key", "value", redis.print);
// client.get("key", redis.print);