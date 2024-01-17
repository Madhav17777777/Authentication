const {Schema , model}=require("mongoose");

const contactSchema = new Schema({
  username: {type:String , required:true},
  email: {type:String , required:true},
  message: {type:String , required:true},
});

//create the model or a collection
const contact = new model('Contact',contactSchema);
module.exports=contact;