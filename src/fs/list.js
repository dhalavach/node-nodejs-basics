import { join, extname, basename } from 'path';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const folderPath = join(__dirname, 'files');
  const files = await readdir(folderPath, { withFileTypes: true });

  const fileInfo = await Promise.all(
    files.map(async (file) => {
      if (file.isFile()) {
        const filePath = join(folderPath, file.name);
        const fileExt = extname(file.name);
        const fileStats = await stat(filePath);
        const fileName = basename(filePath, fileExt);
        const fileSize = fileStats.size;
        const formattedExt = fileExt.slice(1);
        const formattedSize = (fileSize / 1024).toFixed(2) + 'Kb';

        return {
          fileName,
          extension: formattedExt,
          size: formattedSize,
        };
      } else {
        return null;
      }
    })
  );
  console.log(`Files in folder ${folderPath}`);
  console.table(fileInfo.filter(Boolean));
};

await list();
