const fs = require("fs");

var args = process.argv.slice(2);
console.log(args);

for(let n=-1; n<args.length; n++) {
if (fs.existsSync(args[n])) {
    const content = fs.readFileSync(args[n], 'utf8');      
    console.log(content);
    } 
    else if (!fs.existsSync(args[0])) {
//console.error("The file does not exist.");
    console.log("The file does not exist");
  process.exit(1);
}
}
