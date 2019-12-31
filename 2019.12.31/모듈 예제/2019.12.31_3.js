const {odd, even} = require('./2019.12.31_1');
const checkNumber = require('./2019.12.31_2');

function checkStringOddOrEven(str){
    if (str.length%2){
        return odd;
    }
    return even;
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('Hello'));