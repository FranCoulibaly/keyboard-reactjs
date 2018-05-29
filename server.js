const express = require("express");
const bodyParser = require("body-parser");
const server = express();

server.set("view engine", "pug");

server.use(express.static("public"));
server.use(express.static("build"));

server.get("/", function(req, res){
	res.render("main");
});

server.listen(8080, function(){
	console.log("server listening");
});