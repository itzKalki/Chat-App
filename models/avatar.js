import mongoose from "mongoose";
const AvatarSchema=new mongoose.Schema({
    link:{type:String,extended:true,default:"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725840000&semt=ais_hybrid"},
},{timestamps:true})
const Avatar=mongoose.model("Avatar",AvatarSchema);
module.exports=Avatar;