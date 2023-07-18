const express = require("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT_NUMBER;
const cookieParser = require("cookie-parser");

const cors = require('cors');

let corsoptions = {
    origin: '*',
    credential: true,
};

const indexRouter = require("./routes/index.route.js");

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsoptions));

app.get('/', (req, res) => {
    res.send("미니프로젝트 메인페이지입니다.");
});

app.use('/api', indexRouter);

app.listen(PORT, () => {
    console.log(PORT, '포트 번호로 서버가 실행되었습니다.');
})
