require('dotenv').config();
const express= require("express");
const authRoute =require('./router/auth-router');
const contactRoute=require("./router/contact-router");
const app=express();
const connectdb=require("./utils/db");
const User=require("./models/user-model");
const errorMiddleware = require('./middlewares/error-middleware');
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use(errorMiddleware);
const PORT=5000;
connectdb().then(()=>{
  app.listen(PORT,()=>{
    console.log(`server is running on${PORT}`);
  });
});
