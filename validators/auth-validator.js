const {z}=require("zod");

//create an object schema 
const sighnupSchema=z.object({
  username: z.string({required_error: "Name is required"})
  .trim()
  .min(3,{message:"Name must be at least of 3 chars. "})
  .max(255,{messgae:"Name must not be more than 255 characters"}),
  email: z.string({required_error:"email is required"})
  .trim()
  .email({message : "invalid email address"})
  .min(3,{message:"email must be of atleast 3 characters"})
  .max(255,{message:"email must not be more than the 255 characters"}),
  phone: z.string({required_error:"phone is required"})
  .trim()
  .min(10,{message:"phone must be of atleast 10 characters"})
  .max(20,{message:"phone must not be more than the 20 characters"}),
  password: z.string({required_error:"password is required"})
  .trim()
  .min(6,{message:"password must be of atleast 6 characters"})
  .max(1024,{message:"password must not be more than the 1024 characters"}),
})

module.exports=sighnupSchema;