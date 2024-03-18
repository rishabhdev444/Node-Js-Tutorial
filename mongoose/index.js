const express=require('express');
require('./config');
const product=require('./product');

const app=express();
app.use(express.json());

app.post('/create',async (req,res)=>{
    let data=new product(req.body);
    let result=await data.save();
    res.send(result);
    console.log(result);
})

app.get('/list',async (req,res)=>{
    let data=await product.find();
    res.send(data);
    console.log(data);
})

app.delete('/delete/:_id',async (req,res)=>{
    let data=await product.deleteOne(req.params);
    res.send(data);
    console.log(data);
})

app.put('/update/:_id',async (req,res)=>{
    let data=await product.updateOne(
        req.params,
        {
            $set:req.body
        }   
    );
    res.send(data);
    console.log(data);
})



app.listen(4200);