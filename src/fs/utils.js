import { stat } from 'fs/promises';
const checkIfFileExists = async (path) => {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
};

export default checkIfFileExists;
