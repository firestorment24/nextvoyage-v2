// list-all-blobs.mjs
// Enumerate every blob under all 29 "Property Images/" property folders.
//
//   npm install @vercel/blob dotenv
//   node list-all-blobs.mjs
//
// Requires a .env file containing:
//   BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxxxxx

import { list } from '@vercel/blob';
import 'dotenv/config';

// ---------------------------------------------------------------------------
// All 29 property folder prefixes living under "Property Images/".
// The first 10 were confirmed via list({ mode: 'folded' }).
// The remaining 19 are inferred property names — verify each one matches
// your exact folder name (a wrong name simply returns zero blobs).
// ---------------------------------------------------------------------------
const PROPERTIES = [
  // --- confirmed ---
  'Pongwe Island',
  '7132 Hotel',
  'Aman New York',
  'Aman Tokyo',
  'Amangiri',
  'Amanpulo',
  'Amanyara',
  'Ayan Zalaat',
  'BVLGARI Tokyo',
  'Capella Ubud',
  // --- remaining 19 (verify these match your folders exactly) ---
  'Amankora',
  'Amanzoe',
  'Amanjiwo',
  'Amandari',
  'Amankila',
  'Amanoi',
  'Amanpuri',
  'Amansara',
  'Amangani',
  'Amanbagh',
  'Amanemu',
  'Amanruya',
  'Amanwana',
  'Aman Venice',
  'Amanfayun',
  'BVLGARI Bali',
  'Capella Bangkok',
  'Cheval Blanc Randheli',
  'The Brando',
];

const BASE_PREFIX = 'Property Images/';

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error('Missing BLOB_READ_WRITE_TOKEN. Add it to your .env file.');
  process.exit(1);
}

/**
 * List every blob under a single prefix, following the cursor until
 * the result set is exhausted.
 * @param {string} prefix
 * @returns {Promise<string[]>} all blob URLs under the prefix
 */
async function listAll(prefix) {
  const urls = [];
  let cursor;

  do {
    const result = await list({ prefix, cursor, limit: 100 });
    for (const blob of result.blobs) {
      // Skip the folder placeholder itself (a zero-byte "directory" entry).
      if (blob.pathname.endsWith('/')) continue;
      urls.push(blob.url);
    }
    cursor = result.cursor;
  } while (cursor);

  return urls;
}

async function main() {
  /** @type {Record<string, string[]>} */
  const imagesByProperty = {};

  for (const property of PROPERTIES) {
    const prefix = `${BASE_PREFIX}${property}/`;
    try {
      imagesByProperty[property] = await listAll(prefix);
    } catch (err) {
      console.error(`Failed to list "${prefix}":`, err.message);
      imagesByProperty[property] = [];
    }
  }

  // 1) Clean JSON object: property name -> array of image URLs.
  console.log(JSON.stringify(imagesByProperty, null, 2));

  // 2) Per-property summary.
  console.error('\n--- Summary -------------------------------------');
  let total = 0;
  for (const property of PROPERTIES) {
    const count = imagesByProperty[property].length;
    total += count;
    console.error(`${String(count).padStart(4)}  ${property}`);
  }
  console.error('-------------------------------------------------');
  console.error(`${String(total).padStart(4)}  TOTAL across ${PROPERTIES.length} properties`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
