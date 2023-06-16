import { fork } from 'child_process';

const SCRIPT_URL = new URL('./files/script.js', import.meta.url);

const spawnChildProcess = async (args) => {
  const child = fork(SCRIPT_URL, args, { silent: true });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.stdout.on('data', (chunk) => {
    process.stdout.write(`Received from child process: ${chunk}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
