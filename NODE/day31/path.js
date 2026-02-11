const fs = require('fs');
const path = require('path');

const filepath = 'create.txt';
console.log('Absolute Path:', path.resolve(filepath));
console.log('Is Absolute?', path.isAbsolute(filepath));

console.log('File Extension:', path.extname(filepath));
