import Redis from 'ioredis';

/**
 * 添加分布式锁，成功返回1，不成功返回0
 * @param redisClient
 * @param key
 * @param value
 * @param seconds (大于0)
 */
export async function getLock(redisClient: Redis, key, value, seconds) {
  const lua =
    "if redis.call('exists',KEYS[1])<1 and redis.call('setex',KEYS[1],ARGV[2],ARGV[1]) then return 1 end return 0";
  return await redisClient.eval(lua, 1, key, value, seconds);
}
