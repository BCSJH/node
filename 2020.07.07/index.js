var express = require('express'); //설치한 express 모듈 불러와서 변수에 담기
var app = express(); // express 실행해 app object 초기화


/*
app.get('/',function(req,res){ // '/' 위치에 'get' 요청 받을 경우
   res.send('Hello World!'); //보내기
});
*/
app.use(express.static(__dirname + '/public')); //1

var port = 1234; //사용할 포트
app.listen(port,function(){
    console.log('server on! http://localhost:'+port);
});