const express = require("express");
const router = express.Router();

const Foods = require("../Model/Foods.js")

router.post('/postfoods', postfoods)
router.get('/getfoods', getfoods)
router.get('/deleteidfood', deleteidfood)


async function postfoods(req,res){
    try {
        let food2={};
        food2.name= req.body.name,
        food2.price= req.body.price,
        food2.type= req.body.type

        let data1 = new Foods(food2);
        data1.save().then((doc) => res.status(201).send(doc))
        .catch((error)=>{
        res.send("food posting error")
      });
    } catch (error) {
        res.send("am out of postfoods route")
    }
}


  
async function getfoods(req, res){
  try {
    console.log("food uloading")
    let data2 = await Foods.find()
    console.log(data2)
    res.status(300).send({ data2: data2 })
  } catch (error) {
    res.status(300).send(" out of getfoods route")
  }

    // res.json(
    //   [{
    //     id: req.body.id,
    //     // image:"https://source.unsplash.com/random/900×700/?burger",
    //     name: req.body.name,
    //     price: req.body.price,
    //     type: req.body.type


    //   }
      // ,{
      //   id: "2",
      //   image:"https://source.unsplash.com/random/900×700/?burger",
      //   name: "bugger 245",
      //   price:{
      //     small: 122,
      //     large: 321
      //   },
      //   type:"bugger"
      // },{
      //   id: "4",
      //   image:"https://source.unsplash.com/random/900×700/?burger",
      //   name: "bugger 445",
      //   price:{
      //     small: 122,
      //     large: 321
      //   },
      //   type:"bugger"
      // },{
      //   id: "5",
      //   image:"https://source.unsplash.com/random/900×700/?burger",
      //   name: "bugger 555",
      //   price:{
      //     small: 122,
      //     large: 321
      //   },
      //   type:"bugger"
      // }
    
    // ]
    // )
}
  
async function deleteidfood(req, res) {
  try {
      let food2 = await Foods.findByIdAndRemove({ _id: req.query.id })
      res.status(300).send("food item deleted")
  } catch (error) {
      res.status(300).send("am out of route")
  }
};

async function updatefood(req, res) {
  try {
      let food2 = await Foods.updateOne({ _id: req.query.id },
          {
              $set:
              {
                  name: req.body.name,
                  price: req.body.price,
              }
          });
      let food3 = await Foods.find()
      res.status(300).send({ food2: food2 })
  } catch (error) {
      res.status(300).send("am out of route")
  }
};

module.exports= router;