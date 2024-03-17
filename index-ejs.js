const express=require('express');
const path=require('path');
const app=express();

const publicPath=path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

//ejs template
app.get('/profile',(_,resp)=>{
    const user={
        name:'rishabh dev',
        email:'rishabh@gmail.com',
        city:'aligarh',
        skills:['java','react','spring']
    }
    resp.render('profile',{user});
})

app.get('/login',(_,resp)=>{
    resp.render('login');
})

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
})

app.listen(4200);