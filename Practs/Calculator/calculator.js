const express = require("express");
const bodyParser = require("body-parser"); //body-parser is the name of package 
//by using body-parser we can pass the http request that we get

const app = express();
app.use(bodyParser.urlencoded({extended:true}));  //urlencoded= we get access to form data(to see form data "ctrl+shift+i" -> network ->localhost->headers->at bottom form data is present)

//for simple calculator
app.get("/",function(req,res){
    // __dirname is used for after deploying app we dont know at which location directory is present so __dirname tells the location of directory
    res.sendFile(__dirname + "/index.html");//this will redirect to another page 
    //we are concatinating the directory location plus index.html file
    /**res.send("hello world"); it will print only text*/
    //console.log(__dirname);
});

app.post("/",function(req,res){
    var n1 = Number(req.body.num1); // num1 is taken from index.html
    var n2 = Number(req.body.num2);

    var result = n1 + n2;

    res.send("The calculation is: " + result);
});

//for BMI calculator
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator",function(req,res){
    var h = Number(req.body.height);
    var w = Number(req.body.weight);

    var bmiResult = (w / (h * h)) * 10000;

    res.send("Your BMI is : " + bmiResult);
})

app.listen(3000,function(){
    console.log("Server is statred");
});