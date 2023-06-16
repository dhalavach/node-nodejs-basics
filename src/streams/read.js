import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
const FILE_URL = new URL('./files/fileToRead.txt', import.meta.url);

const read = async () => {
  await pipeline(createReadStream(FILE_URL), process.stdout);
};

await read();
