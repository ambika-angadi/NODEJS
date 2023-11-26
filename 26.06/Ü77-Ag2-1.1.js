const fs = require("fs");

var args = process.argv.slice(2);

const filename = args[0];

if (fs.existsSync(filename)) {
    const content = fs.readFileSync(filename, 'utf8');
    console.log(content);
} else {
  console.error(`The file ${filename} does not exist.`);
  //same as console.log(`The file ${filename} does not exist.`);
  process.exit(1);
}
