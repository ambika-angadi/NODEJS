const fs = require("fs");
//console.log("Please enter the filename:");

var args = process.argv.slice(2);
console.log(args);

try{
const content = fs.readFileSync(args[0], 'utf8');
console.log(content);
} catch (error){
    console.error(`got an error reading the file, ${error.message}`);
}