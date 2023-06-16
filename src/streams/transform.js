import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  function reverseString(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }

  const transformingStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, reverseString(chunk.toString()));
    },
  });

  await pipeline(process.stdin, transformingStream, process.stdout);
};

await transform();
