import mongoose from "mongoose";

  const model= mongoose.Schema({
    title:{type:String,require:true},
    price:{type:String,require:true},
    img:{type:String,require:true}
  },{timestamps:true})
  const Model=mongoose.model('products' ,model)
  export default Model