const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
const database='e-comm';

//Way -1 
async function getData(){
    let result=await client.connect();
    let db=result.db(database);
    let collection=db.collection('products');
    let response=await collection.find({}).toArray();
    console.log(response);
}
// getData();

//Way-2

//Function making to handle dbConncection
async function getDbConnection(){
    let result=await client.connect();
    let db=result.db(database);
   return db.collection('products');
}

getDbConnection().then((resp)=>{
    resp.find({}).toArray().then((data)=>{
        console.log(data);
    })
})

//Way-3 

const main=async ()=>{
    let data=await getDbConnection();
    data=data.find().toArray();
    console.log(data);
}

main();

module.exports=getDbConnection;