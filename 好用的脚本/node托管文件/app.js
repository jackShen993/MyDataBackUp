const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

const myEntry = './index.html'
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,myEntry))
})
//托管静态文件
app.use('/css',express.static('css'));
app.use('/static',express.static('static'));

// win系统下 通过cmd命令行查看 ipconfig 获取本机的ipv4 地址
const yourip =  '172.18.0.189' // 这是我的ip
const port = 3333 //随便定义 -- 开启后通过Ip 和 端口进行访问来调试 --- 需要连接mrpyq_dev 进行调试
app.listen(port,yourip,()=>{
    let tips = `sever running at ${yourip}:${port}`
    console.log(tips)
})