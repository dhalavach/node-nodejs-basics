import fs from 'fs';
import { join, resolve } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const destination = path.join(__dirname, 'files_copy');

  fs.access(destination, (error) => {
    error
      ? copyDir()
      : fs.rm(destination, { recursive: true, force: true }, () => {
          copyDir();
        });
  });

  function copyDir() {
    fs.mkdir(destination, { recursive: true }, (err) => {
      if (err) console.error(err);
    });
    fs.readdir(
      path.join(__dirname, 'files'),
      { withFileTypes: true },
      (error, files) => {
        if (error) {
          console.log(error);
        } else {
          files.forEach((file) => {
            if (file.isFile()) {
              fs.createReadStream(
                path.join(__dirname, 'files', file.name)
              ).pipe(fs.createWriteStream(path.join(destination, file.name)));
            }
          });
        }
      }
    );
  }
};

await copy();
