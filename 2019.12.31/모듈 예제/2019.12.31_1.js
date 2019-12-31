//변수를 모아둔 모듈
//다른 파일에서 이 파일을 불러오면 module.exports에 대입된 값을 사용할 수 있음
function helloWorld(){
    console.log('Hello World');
    helloNode();
}

function helloNode(){
    console.log('Hello Node');
}
helloWorld();

const odd = '홀수';
const even = '짝수';

module.exports = {
    odd,
    even,
};