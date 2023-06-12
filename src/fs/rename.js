import { rename as rn } from 'node:fs';
import fs from 'fs';
import { join, resolve } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  rn(
    join(__dirname, 'files', 'wrongFilename.txt'),
    join(__dirname, 'files', 'properFilename.md'),
    (err) => {
      if (err) throw err;
      console.log('Rename complete!');
    }
  );
};

await rename();
