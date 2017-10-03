const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const server = express();

// server.set("view engine", "pug");
server.use(express.static("public"));

server.get("/", function(req, res){
	res.sendFile(path.join(__dirname + "/views/index.html"));
});

server.listen(8080, function(){
	console.log("server listening");
});