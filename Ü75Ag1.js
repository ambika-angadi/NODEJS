var figlet = require('figlet');

console.log(figlet.textSync('Hello World!', {
    font: 'Dancing Font',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));