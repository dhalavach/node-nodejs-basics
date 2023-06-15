import { readdir, mkdir, copyFile, access } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const checkIfExists = async (path) => {
  try {
    await access(path);
    return true;
  } catch (error) {
    return false;
  }
};

const getAbsoluteURL = (path) => new URL(path, import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ORIGIN_FOLDER = getAbsoluteURL('files');
const DESTINATION_FOLDER = getAbsoluteURL('files_copy');

const copy = async () => {
  if (
    (await checkIfExists(DESTINATION_FOLDER)) ||
    !(await checkIfExists(ORIGIN_FOLDER))
  ) {
    throw new Error('FS operation failed');
  } else {
    const [filesToCopy] = await Promise.all([
      readdir(ORIGIN_FOLDER, mkdir(DESTINATION_FOLDER)),
    ]);
    const promises = filesToCopy.map((name) =>
      copyFile(
        path.join(__dirname, 'files', `${name}`),
        path.join(__dirname, 'files_copy', `${name}`)
      )
    );
    await Promise.all(promises);
  }
};

copy();
