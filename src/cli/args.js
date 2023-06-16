const parseArgs = () => {
  const PREFIX = '--';
  let props = {};

  for (let i = 2; i < process.argv.length; i++) {
    let arg = process.argv[i];

    if (arg.startsWith(PREFIX)) {
      let propName = arg.slice(2);
      let propValue = process.argv[i + 1];
      props[propName] = propValue;
      i++;
    }
  }

  for (let key of Object.keys(props)) {
    console.log(`${key} is ${props[key]}`);
  }
};

parseArgs();
