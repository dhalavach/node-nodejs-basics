import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const FILE_URL = new URL('./files/fileToCompress.txt', import.meta.url);
const ARCHIVE_URL = new URL('./files/archive.gz', import.meta.url);

const compress = async () => {
  await pipeline(
    createReadStream(FILE_URL),
    createGzip(),
    createWriteStream(ARCHIVE_URL)
  );
};

await compress();
