import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const FILE_URL = new URL('./files/fileToWrite.txt', import.meta.url);

const write = async () => {
  const ws = createWriteStream(FILE_URL, { flags: 'a' });
  await pipeline(process.stdin, ws);
};

await write();
