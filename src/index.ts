import { loadApi } from './api/api';

import dotenv from 'dotenv'
import { cleanCache } from './backend/CleanCache';

const CLEAN_CACHE_MINUTES = 1
async function main() {
  dotenv.config()

  loadApi()
  cleanCache()
  const interval = setInterval(cleanCache, CLEAN_CACHE_MINUTES * 60 * 1000);
}


main()