const  {odd, even} = require('./2019.12.31_1');

function checkOddEven(num) {
    if (num%2){
        return odd;
    }
    return even;
}

module.exports = checkOddEven;