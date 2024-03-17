const express=require('express');
const path=require('path');
const app=express();

const publicPath=path.join(__dirname,'public');
console.log(publicPath)

// app.use(express.static(publicPath));

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
})

app.listen(4200);