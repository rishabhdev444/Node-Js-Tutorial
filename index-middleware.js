const express=require('express');
const reqFilter=require('./middleware')
const app=express();
const route=express.Router();


// app.use(reqFilter)

route.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send('Welcome home ');
})

app.get('/user',(req,resp)=>{
    resp.send('Welcome User');
})

route.get('/contact',(req,resp)=>{
    resp.send('Welcome Contact');
})


//route level middleware
route.get('/about',(req,resp)=>{
    resp.send('Welcome to About Page');
})


app.use('/',route);

app.listen(4200);