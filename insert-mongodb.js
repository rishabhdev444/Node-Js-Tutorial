const getDbConnection = require("./index-mongodb")

const insertData=async ()=>{
    const db= await getDbConnection();
    const result= await db.insertMany(
        [
            {name:"Vivo Book",brand:"Vivo",price:"400"},
            {name:"Samsung",brand:"Samsung",price:"300"},
            {name:"Nord",brand:"One Plus",price:"1300"},
        ]
    );
    console.log(result)
    if(result.acknowledged){
        console.log("Data Inserted Successfully!")
    }
}

insertData();
