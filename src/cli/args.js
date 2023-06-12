const parseArgs = () => {
  // Create an empty object to store the properties
  let props = {};

  // Loop over the process.argv array from index 2
  for (let i = 2; i < process.argv.length; i++) {
    // Get the current element
    let arg = process.argv[i];

    // Check if it starts with --
    if (arg.startsWith('--')) {
      // Remove the -- prefix and use it as the property name
      let propName = arg.slice(2);

      // Get the next element as the property value
      let propValue = process.argv[i + 1];

      // Store the property name and value in the object
      props[propName] = propValue;

      // Increment i to skip the next element
      i++;
    }
  }

  // Loop over the keys of the object
  for (let key of Object.keys(props)) {
    // Print the key and value to the console
    console.log(`${key} is ${props[key]}`);
  }
};

parseArgs();
