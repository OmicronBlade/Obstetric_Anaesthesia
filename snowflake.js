// Snowflake ID generator (Twitter layout): 41-bit millisecond timestamp since
// the Twitter epoch, 10-bit worker and 12-bit sequence (both random, as the
// form has no server to coordinate them). Returns the ID as a decimal string.
const SNOWFLAKE_EPOCH_MS = 1288834974657;

function newSnowflake(){
  const ms = BigInt(Date.now() - SNOWFLAKE_EPOCH_MS);
  const rnd = n => BigInt(Math.floor(Math.random()*(2**n)));
  return String((ms<<22n) | (rnd(10)<<12n) | rnd(12));
}
