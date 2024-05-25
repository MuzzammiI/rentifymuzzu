const express = require("express");
const cors = require("cors");
require("./config");
require("dotenv").config();
//Database connect to the User or BookDetails
const User_details = require("./UserSchema");
const property_details = require("./PostSchema");


const app = express();
app.use(cors());
app.use(express.json());


//New User Adding in database -> Registering user Data
app.post("/register", async (req, res) => {
  let user = await new User_details(req.body);
  const data = await user.save();
  res.send(data);
  // console.log(data);
});

//Find all user data from database
app.get("/user",async(req,res)=>{
    let userfind = await User_details.find();
    res.send(userfind);
    // console.log(userfind);
  })

//Adding Post Property
app.post("/addproperty", async (req, res) => {
  const data = await new property_details(req.body);
  const saveData = await data.save();
  res.send(saveData);
  // console.log(bookdata);
});

//Adding properties details by seller
app.post("/property_details", async (req, res) => {
  let user = await new property_details(req.body);
  const data = await user.save();
  res.send(data);
  // console.log(data);
});

//Showing All Property
app.get("/showproperty",async (req,res)=>{
  let getPropertyDetail = await property_details.find();
  res.send(getPropertyDetail);
  // console.log(userfind);
})


  app.listen(process.env.PORT, (err) => {
    if (err) return err;
    else return console.log("database Succefully Connected");
  });
  