//Node.js 내장 HTTP 모듈 사용
var http = require('http'); 
var server = http.createServer(function(request,response){ 

    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('Hello node.js!!');

});


server.listen(8080, function(){ 
    console.log('Server is running...');
});


//Express.js 웹 프레임워크 사용
const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.get('/echo', (req, res) => {
  const responseType = req.query.responseType || 'json';
  const msg = req.query.msg;

  if (!msg) {
    return res.status(400).json({ error: 'msg 파라미터가 필요합니다.' });
  }

  if (responseType === 'json') {
    return res.json({ message: msg });
  } else if (responseType === 'text') {
    return res.send(`Message: ${msg}`);
  } else {
    return res.status(400).json({ error: '올바르지 않은 responseType 값입니다.' });
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
