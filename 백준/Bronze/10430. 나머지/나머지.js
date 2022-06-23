let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

console.log((a + b)%c);
console.log((parseInt(a%c) + (b%c))%c);
console.log(parseInt(a*b)%c);
console.log(parseInt((a%c) * (b%c))%c);