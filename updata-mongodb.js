const getDbConnection=require('./index-mongodb');

const updateData=async ()=>{
    let data=await getDbConnection();
    let result=await data.updateOne(
        {name:'oppo phone 12'},
        {
            $set:{name:'oppo phone 15',price:'550'}
        }
    )
    console.log(result)
}

updateData();