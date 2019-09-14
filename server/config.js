module.exports = {
  API_KEY: process.env.API_KEY,
  BASE_URL: 'https://api-ropsten.etherscan.io/api?module=proxy&action=',
  BLOCKS_IN_CACHE: 100,
  CONCURRENT_FETCHES: 2,
  REFRESH_INTERVAL: 1000,
  PORT: 8000,
  ACTIVE_TIME: 1000 * 60,
  BLOCK_CONFIRMATIONS: 0 // y is current block -> fetch y - BLOCK_CONFIRMATIONS
};
