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

async function fetch(url, response){
  try{
    response.json(await requestPro({
      uri: url,
      json: true,
      headers: HEADS
    }))
  }catch(error){
    console.log('this is error-->', err)
  }
}

app.get('/search', async (req, res) => {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?_=1553421880513&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1'
  await fetch(url, res)
})
app.get('/recommand', async (req, res) => {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1553422369734&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1'
  await fetch(url, res)
})
app.get('/rank', async (req, res) => {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?_=1553422369741&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1'
  await fetch(url, res)
})

app.listen(PORT)
console.log('server is running!')