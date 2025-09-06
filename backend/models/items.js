import mongoose from "mongoose";

const itemSchema= new  mongoose.Schema({
    name:{type:String,required:true},
    quantity:{type:Number , default:1},
    BuyDate: { type: Date, default: Date.now }, 
    expiryDate:{type:Date,required:true},
    category: { type: String ,required:true }, 
    isUsed: { type: Boolean, default: false } ,
    note:{type:String},
}
    


, { timestamps: true })
const itemModel=mongoose.model("item",itemSchema);
export default itemModel;