const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Signup =require("../Model/Signup.js")
const jwt =require("jsonwebtoken");
const jwtSecret="hjuytfdsawxcdrfvgtyhjnbvfolkmnjh";

router.post('/postsignup', postsignup)
router.post('/postsignin', postsignin)



async function postsignup(req,res){
    try {
        let user={};
        user.email= req.body.email,
        user.password= req.body.password

        let data = new Signup(user);
        const salt = await bcrypt.genSalt(10);
        // now we set data password to hashed password
        data.password = await bcrypt.hash(data.password, salt);
        data.save().then((doc) => res.status(201).send(doc))
        .catch((error)=>{
        res.send("email already saved")
      });
    } catch (error) {
        res.send("am out of route")
    }
};

async function postsignin(req,res){
    try {
        const body = req.body
        let data1 = await Signup.findOne({ email: body.email });
        console.log({"data1": data1})
        if (!data1 ) {
          res.status(200).send({message: "email is invalid"});
        }
        else{
          const validPassword = await bcrypt.compare(body.password, data1.password);
          // console.log("pass", data1.pass, body.pass)
          if (!validPassword) {
            res.status(403).send({message: "password is invalid"});
          }
          else {
            res.status(250).send({message: "login"})
          }
        }
        // const data2={
        //   user:{
        //     id: data1.id
        //   }
        // }
        // const authToken = jwt.sign(data2,jwtSecret)
        // return res.json({success: true, authToken: authToken})
    } catch (error) {
        console.log(error)
    res.send({message: "am out of a route"})
    }
}

module.exports= router;