const redis = require('redis');
const dotenv = require('dotenv');
dotenv.config();

const redisClient = redis.createClient({
  url: process.env.REDIS_URI || 'redis://localhost:6379',
});

redisClient.on('ready', () => {
  console.log('✅ Redis client is ready');
});

redisClient.on('error', (err) => {
  console.error('❌ Redis error:', err);
});

async function connectRedis() {
  try {
    await redisClient.connect();
  } catch (err) {
    console.error('❌ Failed to connect to Redis:', err);
    throw err; // propagate to caller
  }
}

module.exports = {
  redisClient,
  connectRedis,
};
