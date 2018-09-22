var http = require("http");
var fs = require("fs");


//fs.readFile("./index.html",function(err,html){

//http.createServer(function(req,res){
//res.write(html);
//res.end();
//}).listen(8080);

//});


//LEE EL ARCHIVO CADA VEZ QUE SE HACE UNA PETICION
//LO QUE NOS AYUDA PORQUE NO HAY QUE REINICIAR EL 
//SERVIDOR CADA VES QUE SE MODIFIQUE EL ARCHIVO 
//QUE SE LE ESTA PASANDO (INDEX.HTML)
http.createServer(function(req,res){
 
 fs.readFile("./index.html",function(err,html){
  res.write(html);
  res.end();
 });

}).listen(8080);

