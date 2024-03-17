const express=require('express');
const app=express();

app.get('',(req,res)=>{
    console.log("Query Parameter : ",req.query);
    console.log("Query Parameter name : ", req.query.name)
    // res.send('Hello , this is Home Page');
    // res.send('Hello , '+req.query.name);
    res.send(`<h1> Welcome , ${req.query.name}. </h1>
    <a href='/about'>Go to About Page</a>`);
})

app.get('/about',(req,res)=>{
    res.send(`Hello , this is About Page
    <a href='/'>Go to Home Page</a>
    `);
})

app.listen(4200);