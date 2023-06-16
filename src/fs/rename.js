import { rename as rn } from 'fs/promises';
import { join } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const getAbsoluteURL = (path) => new URL(path, import.meta.url);
const OLD_NAME = 'wrongFilename.txt';
const NEW_NAME = 'properFilename.md';
const OLD_URL = path.join(__dirname, 'files', OLD_NAME);
const NEW_URL = path.join(__dirname, 'files', NEW_NAME);

const checkIfExists = async (path) => {
  try {
    await access(path);
    return true;
  } catch (error) {
    return false;
  }
};

const rename = async () => {
  if (await checkIfExists(NEW_URL)) {
    throw new Error('FS operation failed');
  } else {
    try {
      await rn(OLD_URL, NEW_URL);
    } catch (err) {
      throw new Error('FS operation failed');
    }
  }
};

await rename();
