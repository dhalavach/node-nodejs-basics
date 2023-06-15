import { rm } from 'fs/promises';
import { join, resolve } from 'path';
import { join } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const remove = async () => {
//   fs.rm(join(__dirname, 'files', 'fileToRemove.txt'), (err) => {
//     console.log('FS operation failed');
//   });
// };

const remove = async () => {
  try {
    await rm(join(__dirname, 'files', 'fileToRemove.txt'));
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
