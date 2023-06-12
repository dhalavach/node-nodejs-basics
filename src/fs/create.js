import fs from 'fs';
import { join, resolve } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const outputPath = path.resolve(__dirname, 'files', 'fresh.txt');

  fs.writeFile(
    outputPath,
    'I am fresh and young',
    { encoding: 'utf8', flag: 'a' },
    (err) => {
      if (err) {
        throw new Error('FS operation failed');
      }
    }
  );
};

await create();
