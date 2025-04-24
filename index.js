//install express for us to run this project
//express allow us to create end-points to listen in for incoming requests.

//implies we comply to strict rules
'use strict';

const express = require("express"); //import express

//constant
const PORT = 8080;
const HOST = "127.0.0.1";   //default: http://127.0.0.1:8080/ == http://localhost/
const OS = require("os");   //import the OS environment
const ENV = "DEV";          //specify this project is under development

//App
const app = express();                  //invoke the express library
app.get("/", (req, res)=>{              //listen for get request: http//:127.0.0.1 for the root of the app
    res.statusCode = 200;               //200 == SUCCESS
    const msg = "Hello FSD learners";   //response msg
    res.send(msg);

});

app.get("/test", (req, res)=>{
    res.statusCode = 200;               //200 == SUCCESS
    const msg = "Hello from /test node!";   //response msg
    res.send(msg);
});

app.listen(PORT, HOST);         //invoke the listen app, listen to port 8080
console.log(`running on http://${HOST}:${PORT}`);
