import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
const calculateHash = async () => {
  const FILE_LOCATION = './files/fileToCalculateHashFor.txt';
  const FileURL = new URL(FILE_LOCATION, import.meta.url);

  const dataSource = await readFile(FileURL);
  const dataEncoded = createHash('sha256').update(dataSource);
  console.log(dataEncoded.digest('hex'));
};

await calculateHash();
