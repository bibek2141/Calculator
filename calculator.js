/*express module*/
const express = require("express");
const bodyParser = require("body-Parser");

const app = express();

/*method to configure the middleware used by the routes of the Express HTTP server object.*/
app.use(bodyParser.urlencoded({extended:true}));

/*Get Method Route*/
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

/*Post Method Route*/
app.post("/",function(req,res){
  var num1 = Number(req.body.number1);
  var num2 = Number(req.body.number2);
  var result;

  if((req.body.add)){
    var add = num1 + num2;
    result = res.send("The result of the calculation is: " + add);
  }
  else if(req.body.subtract){
    var subtract = num1 - num2;
    result = res.send("The result of the calculation is: " + subtract);
  }
  else if(req.body.multiply){
    var multiply = num1 * num2;
    result = res.send("The result of the calculation is: " + multiply);
  }
  else if(req.body.divide){
    var divide = num1 / num2;
    result = res.send("The result of the calculation is: " + divide);
  }
  else{
    res.send("error");
  }

});

/*Ports starts a server and listen on port 3000 for connections*/
app.listen(3000, function(){
  console.log("Server started on port 3000.")
});
