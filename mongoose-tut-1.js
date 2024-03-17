const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-comm');

const productSchema=new mongoose.Schema(
        {
            name:String,
            brand:String,
            price:Number
        }
);

const saveInDb=async ()=>{
    const productModel=mongoose.model('products',productSch);
    let data=new productModel(
        {
            name:"RealMe",
            brand:"RealMe",
            price:300
        }
    );
    let result=await data.save();
    console.log(result);
}

// saveInDb();

const updateInDb=async ()=>{
    const productModel=mongoose.model('products',productSchema);
    let data=await productModel.updateOne(
        {
            name:"RealMe"
        },
        {
           $set:
           {
                name:"Real Me Narzo",
                brand:"Real-Me",
                price:400
            }
        }
    );
    console.log(data);
}

// updateInDb();

const deleteInDb=async()=>{
    const productModel=mongoose.model('products',productSchema);
    let data=await productModel.deleteOne(
        {
            name:"M-12"
        }
    );
    console.log(data)
}

// deleteInDb();

const findInDb=async()=>{
    const productModel=mongoose.model('products',productSchema);
    let data=await productModel.find(
        {
            name:"Samsung"
        }
    );
    console.log(data)
}

findInDb();