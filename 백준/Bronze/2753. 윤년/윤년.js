const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

if((input[0] % 4 === 0 && input[0] % 100 !== 0) || input[0] % 400 === 0) {
  console.log(1);
}
else {
  console.log(0);
}