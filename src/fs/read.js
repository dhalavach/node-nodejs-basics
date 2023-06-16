import { readFile } from 'fs/promises';
import { join } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  try {
    const source = await readFile(
      join(__dirname, 'files', 'fileToRead.txt'),
      'utf8'
    );
    console.log(source);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
