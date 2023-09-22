const express = require('express');
const app = express();
const port = 1818;
const html = `
<!DOCTYPE html>
<html>
<head>
    <title>값 입력 폼</title>
</head>
<body>
    <form action="/post" method="POST"> <!-- method를 POST로 변경 -->
        <label for="value1">거북이:</label>
        <input type="text" id="value1" name="value1"><br><br>

        <label for="value2">토끼:</label>
        <input type="text" id="value2" name="value2"><br><br>

        <label for="value3">만두:</label>
        <input type="text" id="value3" name="value3"><br><br>

        <input type="submit" value="제출">
    </form>
</body>
</html>
`;

app.use(express.urlencoded({ extended: true })); // express.urlencoded 미들웨어를 사용하여 폼 데이터를 파싱합니다.

app.get('/get', (req, res) => {
    res.send(html); 
});

app.post('/post', (req, res) => { // POST 요청을 처리합니다.
    const value1 = req.body.value1;
    const value2 = req.body.value2;
    const value3 = req.body.value3;

    const data = {
        "거북이": value1,
        "토끼": value2,
        "만두": value3
    };

    res.json(data);
});

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
