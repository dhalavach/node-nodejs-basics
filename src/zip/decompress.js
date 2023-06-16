import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const FILE_URL = new URL('./files/fileToCompress.txt', import.meta.url);
const ARCHIVE_URL = new URL('./files/archive.gz', import.meta.url);

const decompress = async () => {
  await pipeline(
    createReadStream(ARCHIVE_URL),
    createGunzip(),
    createWriteStream(FILE_URL)
  );
};

await decompress();
