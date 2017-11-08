// Index file 

var generator = require('generate-password');
var entropy = require('string-entropy');

let arr = []
const words = 4;
const length = 10;
for (let i = 0; i < words; i++) {

    password = generator.generate({
        length,
        numbers: true,
        uppercase: true,
        symbols: false,
        uppercase: true

    });


    arr.push(password)
}

//print passwords
let str = ''
for (let i = 0; i < arr.length; i++) {
    str += arr[i] + ' '
}
console.log(str)
console.log(words + ' RANDOM words from word list of NNNNNN words \n')
console.log('Entropy:' + entropy(str) + ' bits');


pow = Math.pow(62, length)
log = Math.log2(pow)
console.log('You need ' + log + ' RANDOM characters in [a-zA-Z0-9] to get the same entropy.')