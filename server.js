// Importing express module
const express = require('express');
const app = express();
const { generateToken04 } = require('./zegoServerAssistant');
 
app.set("view engine", "ejs");
 
// Calling the public folder
app.use(express.static("public"));
 


app.get("/stream",(req,res)=>{
const appID = 549767164;
const secret = '1f3b7487839376d767c03ef823f4d131';
const roomID = "room111"; 
const userID = "user"+Math.floor((Math.random()*1000))
const userName = "user123"+Math.floor((Math.random()*1000));
const effectiveTimeInSeconds = 3600; 
const payload = '';

const token = generateToken04(appID, userID, secret, effectiveTimeInSeconds, payload);
console.log(token);
res.render("stream",{roomID:roomID,userID:userID,kitToken:token,userName:userName,appID:appID});
// res.send(__dirname+"/views/stream.html");
console.log("rrr");
});

app.get("/" , (req,res)=>{
  res.render("index");
});
 
 
// Listing the server
app.listen(process.env.PORT|| 4000 , ()=>{
    console.log("Server running on port 4000");
})