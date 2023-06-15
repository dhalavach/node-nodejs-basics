import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT = 'I am fresh and young';
const OUTPUT_PATH = path.resolve(__dirname, 'files', 'fresh.txt');
const ERROR_MESSAGE = 'FS operation failed';

const create = async () => {
  try {
    await writeFile(OUTPUT_PATH, CONTENT, { flag: 'wx' });
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }
};

await create();
