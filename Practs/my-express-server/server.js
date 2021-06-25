const express = require("express");
const app = express();

app.get("/", function(req,res){ //"/" this is home page
    res.send("<a href='https://www.google.com'>Google</a>")
});

app.get("/contact",function(req,res){ // this is contact page
    res.send("You can contact me at onkar@gmail.com")
})

app.get("/about",function(req,res){ // this is about page
    res.send("About me")
})

app.listen(3000, function(){
    console.log("Server is started");
});