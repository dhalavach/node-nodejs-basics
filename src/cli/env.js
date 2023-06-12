const parseEnv = () => {
  // Loop over the keys of process.env
  for (let key of Object.keys(process.env)) {
    // Check if the key starts with RSS_
    if (key.startsWith('RSS_')) {
      // Print the key and value to the console
      console.log(`${key} = ${process.env[key]}`);
    }
  }
  //console.log(process.env);
};

parseEnv();
