import mongoose, { Mongoose } from "mongoose";
const MessageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    reciever: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Message = mongoose.model("Message", MessageSchema);
module.exports=Message;