// Index file 

//var generator = require('generate-password');
//var entropy = require('string-entropy');


//===============================================================
//Ignored - Teacher comment: Password should be easy to remember! 
//===============================================================
/*
let arr = []
const words = 4;
const length = 10;
for (let i = 0; i < words; i++) {

    password = generator.generate({
        length,
        numbers: true,
        uppercase: true,
        symbols: false,
        smallcase: true

    });
    arr.push(password)
}

//print passwords
let str = ''
for (let i = 0; i < arr.length; i++) {
    str += arr[i] + ' '
}
console.log(words + ' RANDOM words from word list of NNNNNN words')
console.log(str,'')
console.log('Entropy:' + entropy(str) + ' bits');


pow = Math.pow(62, length)
log = Math.log2(pow)
console.log('You need ' + log + ' RANDOM characters in [a-zA-Z0-9] to get the same entropy.')
*/

//==================================================================
//Solution 1 - Teacher comment: Password should be easy to remember! 
//==================================================================

/*
//Imports 
var xkcdPassword = require('xkcd-password')
var entropy = require('string-entropy');
var pw = new xkcdPassword()

//Easy to remember so less options:teacher comments! 
var options = {
 numWords: 4,
 //minLength: 5,
 maxLength: 8
}
var res="";
printRes="";
// using callbacks 
pw.generate(options, function (err, result) {
    
    for(i=0;i<result.length;i++){
        res+=result[i];
        printRes+=result[i]+" ";

    }
    console.log(options.numWords + ' RANDOM words from word list of NNNNNN words')
    console.log(printRes)  // ['distome', 'pantries', 'sending', 'weiner'] 
    console.log('Entropy:' + entropy(res) + ' bits');//Entropy 

    pow = Math.pow(62, options.maxLength)
    log = Math.log2(pow)
    console.log('You need ' + log + ' RANDOM characters in [a-zA-Z0-9] to get the same entropy.')
    
  })

  */
  //==================================================================
  //Solution 2 - Teacher comment: Password should be easy to remember! 
  //==================================================================

  var generate = require('xkcd-pass-plus');
  var entropy = require('string-entropy');
  
  var defaultOptions = {
    words: {
      dictionary: 'mixed', // xkcd (2k, most memorable) or letterpress (270k) or mixed
      num: 4, // number of words to generate
      min: 4, // minimum length of each word
      max: 8 // maximum length of each word
    },
    separator: '-', // how to join words
    paddingDigits: { // how many digits to add before and after the pass 
     // before: 0,
      //after: 1 
    },
    paddingSymbols: { // how many symbols to add before and after the pass
      //symbols: '!@#$%^&*()', // which symbols
      //before: 0,
      //after: 1
    }
  };
  var pass = generate(defaultOptions).pass;
  var passEntropy = generate(pass).entropy;
  var blindEntropy = generate(pass).blindEntropy;
  var rating = generate(pass).rating;
  
  console.log(pass);
  console.log(blindEntropy);
  console.log(rating);

  console.log(defaultOptions.words.num + ' RANDOM words from word list of NNNNNN words')
  console.log(pass)  // ['distome', 'pantries', 'sending', 'weiner'] 
  console.log('Entropy: with dashes:' + entropy(pass) + ' bits');//Entropy 
  console.log("Entropy: without dashes:" +passEntropy);
  
  pow = Math.pow(62, defaultOptions.words.num)
  log = Math.log2(pow)
  console.log('You need ' + log + ' RANDOM characters in [a-zA-Z0-9] to get the same entropy.')
  