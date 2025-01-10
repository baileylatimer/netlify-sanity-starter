import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'uxddufsz',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});
