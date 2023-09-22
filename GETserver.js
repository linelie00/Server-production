const express = require('express');
const app = express();
const port = 8383;
const html = `
<!DOCTYPE html>
<html>
<head>
    <title>값 입력 폼</title>
</head>
<body>
    <form action="/result" method="GET">
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

app.use(express.json());


app.get('/get', (req, res) => {
    res.send(html); 
});

app.get('/result', (req, res) => {
    const value1 = req.query.value1;
    const value2 = req.query.value2;
    const value3 = req.query.value3;

    const data = {
        거북이: value1,
        토끼: value2,
        만두: value3
    };
   
    res.json(data);
});

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
