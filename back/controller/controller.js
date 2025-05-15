import model from '../model/model.js'
const getProducts= async (req,res)=>{
    const product=await model.find()
res.json(product)
}

const postProducts= async(req,res)=>{
    const {title,price,img}=req.body
    const product={title,price,img}
    const newPoduct= await model.create(product)
    res.json(newPoduct)
}
const deleteProducts= async (req,res)=>{
const {id}=req.params;
await model.findByIdAndDelete(id)
res.json(`${id} silindi`)
}
export {deleteProducts,getProducts,postProducts}