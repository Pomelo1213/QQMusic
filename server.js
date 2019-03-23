const express = require('express')
const cors = require('cors')
const requestPro = require('request-promise')
const PORT = process.env.PORT || 8089
const HEADS = {
  'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
  'referer': 'https://y.qq.com/',
  'origin': 'https://y.qq.con',
}
const app = express()
app.use(cors())

function fetch(url, response){
  requestPro({
    uri: url,
    json: true,
    headers: HEADS
  })
  .then(res => console.log('this si res', res))
}
app.get('/', () => {

})
app.get('/command',(req, res) => {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1553352668903&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1'
  fetch(url, res).then(reponse => { console.log('this is response', response)})
})
app.get('/rank', (req, res) => {})
app.get('/search', (req, res) => {})

app.listen(PORT)
console.log('server is running!')