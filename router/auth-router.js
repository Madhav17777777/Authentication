const express=require("express");
const router=express.Router();
const authcontrollers=require('../controllers/auth-controller');
const sighnupSchema=require("../validators/auth-validator");
const validate=require("../middlewares/validate-middleware");
// router.get("/",(req,res)=>{
//   res.send("hello world using the router...");
// });

router.route("/").get(authcontrollers.home);
router.route('/register').post(validate(sighnupSchema),authcontrollers.register);
router.route('/login').post(validate(sighnupSchema),authcontrollers.login);

module.exports=router;