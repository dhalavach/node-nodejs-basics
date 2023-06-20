import { sep } from 'path';
import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import './files/c.js';

const unknownObject =
  Math.random() > 0.5
    ? await import('./files/a.json', { assert: { type: 'json' } })
    : await import('./files/b.json', { assert: { type: 'json' } });

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3456;
//change port to any other (3465, etc.) if you already have something listening on port 3000

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export default {
  unknownObject,
  myServer,
};
