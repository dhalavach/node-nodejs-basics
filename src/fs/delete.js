import fs from 'fs';
import { join, resolve } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  fs.rm(join(__dirname, 'files', 'fileToRemove.txt'), (err) => {
    console.log('FS operation failed');
  });
};

await remove();
