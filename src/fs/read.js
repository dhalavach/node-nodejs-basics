import { createReadStream } from 'fs';
import { join } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const source = join(__dirname, 'files', 'fileToRead.txt');
  const encoding = 'utf-8';
  const input = createReadStream(source, encoding);
  const dataArray = [];

  input.on('data', (error, data) => {
    try {
      if (error) {
        throw error('FS operation failed');
      } else {
        dataArray.push(data);
      }
    } catch {
      console.log(error);
    }
  });

  input.on('end', () => {
    console.log(dataArray.join(''));
  });
};

await read();
