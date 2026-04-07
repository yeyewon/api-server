// 서버 구축
import express from 'express'

// express 객체
const app = express()

// 루트 라우트 설정
app.get('/', (req, res) => {
    // 클라이언트에게 응답 보내기
    res.send("<h1>hello world</h1>");
})

// 상품 목록 데이터 처리
app.get('/products', (req, res) => {
    const products = [
        {id:1, name:'무선마우스', price:30000},
        {id:2, name:'유선키보드', price:20000}
    ]
    res.json(products); // json 형태로 응답 보내기
})

// body를 파싱할(번역) 미들웨어
app.use(express.json())

// 상품 등록 처리
app.post('/products', (req, res) => {
    console.log(req.body); // body: json데이터
    res.send("상품이 등록되었습니다.")
})

// 서버 시작
// app.listen(8000, () => {
//     console.log(' 서버 실행 중...');
// })

const PORT = 8000
app.listen(PORT, () => {
    console.log(`${PORT} 서버 실행 중...`);
})