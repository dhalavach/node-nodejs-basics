import { sep } from 'path';
import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import './files/c.js';

import a from './files/a.json' assert { type: 'json' };
import b from './files/b.json' assert { type: 'json' };

// const { default: a } = await import('./files/a.json');
// const { default: b } = await import('./files/a.json');

// let importedModuleName = Math.random() > 0.5 ? 'a' : 'b';
// import importedModuleName from `./files/${importedModuleName}.json` assert {type: 'json'};
// let unknownObject = importedModuleName;

let unknownObject = Math.random() > 0.5 ? a : b;

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

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export default {
  unknownObject,
  myServer,
};
