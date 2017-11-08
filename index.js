// Index file 

var generator = require('generate-password');

let arr=[]
const words=4;
for(let i=0;i<words;i++){

    password=generator.generate({
        length: 10,
        numbers: true,
        uppercase: true,
        symbols:false,
        uppercase:true
        
     });


arr.push(password)
} 

//print passwords
let str=''
for(let i=0;i<arr.length;i++){
str+=arr[i]+' '
}
console.log(str)
    