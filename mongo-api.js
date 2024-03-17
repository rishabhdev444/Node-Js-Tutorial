const express=require('express');
const getDbConnection=require('./index-mongodb')
const mongodb=require('mongodb');
const app=express();


app.use(express.json());

//get method

app.get('/',async (req,res)=>{
    let data=await getDbConnection();
    let result=await data.find({}).toArray();
    res.send(result);
})


//post method
app.post('/',async (req,res)=>{
   let data=await getDbConnection();
   let result=await data.insertOne(req.body);
   res.send(result);
   console.log(result)
})

//put method
app.put('/:data',async (req,res)=>{
    let data=await getDbConnection();
    let result=await data.updateOne(
        {name:req.params.data},
        {
            $set:req.body 
        }
    );
    res.send(result);
    console.log(result)
 })

 //delete method

 app.delete('/:id',async (req,res)=>{
    console.log(req.params.id);
    let data=await getDbConnection();
    let result=await data.deleteOne(
        {
            _id:new mongodb.ObjectId(req.params.id)
        }
    );
    res.send(result);

 })

app.listen(4200);