var express = require('express');
var app = express();
var fs = require("fs");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.get('/', function (req, res) {
        res.send( 'Mini NBA Players Sneakers List Web APP' );
     });

app.get('/listPlayers', function (req, res) {
    fs.readFile( __dirname + "/" + "players.json", 'utf8', function (err, data) {
        if (err){
            console.log(err);
            res.writeHead(404,{'Content-Type':'text/html'})

        } else{
            console.log( data );
            res.end( data );
            }
     });
})

app.get('/listPlayers/:id', function (req, res) {
    fs.readFile( __dirname + "/" + "players.json", 'utf8', function (err, data) {
        if (err){
            console.log(err);
            res.writeHead(404,{'Content-Type':'text/html'})

        } else{
        var fail = { 
            "name" : "/",
            "team" : "/",
            "brand" : "/",
            "sneakers": {
             "1" : "/", 
             "2" : "/", 
             "3" : "/", 
             "4" : "/"
             }    
            }
            var players = JSON.parse(data);
            var player = players["player"+req.params.id];
            if (req.params.id<0 || req.params.id>9){
                res.end(JSON.stringify(fail));
            } else {
                console.log(player);
                res.end( JSON.stringify(player) );
            }
        }
     });
})

app.get('/listPlayers/:id/sneakers', function (req, res) {
    fs.readFile( __dirname + "/" + "players.json", 'utf8', function (err, data) {
        if (err){
            console.log(err);
            res.writeHead(404,{'Content-Type':'text/html'})

        } else{
            var fail = { 
                "name" : "/",
                "team" : "/",
                "brand" : "/",
                "sneakers": {
                 "1" : "/", 
                 "2" : "/", 
                 "3" : "/", 
                 "4" : "/"
                 }    
                }
            var players = JSON.parse(data);
            var player = players["player"+req.params.id];
            if (req.params.id<0 || req.params.id>9){
                var sneakers = fail.sneakers;
                res.end( JSON.stringify(sneakers) );
            } else {
                console.log(player);
                var sneakers = player.sneakers;
                console.log(sneakers);
                res.end( JSON.stringify(sneakers) );
             }
        }
     });
})

app.get('/listPlayers/:id/sneakers/:sid', function (req, res) {
    fs.readFile( __dirname + "/" + "players.json", 'utf8', function (err, data) {
        if (err){
            console.log(err);
            res.writeHead(404,{'Content-Type':'text/html'})

        } else{
            var fail = { 
                "name" : "/",
                "team" : "/",
                "brand" : "/",
                "sneakers": {
                 "1" : "/", 
                 "2" : "/", 
                 "3" : "/", 
                 "4" : "/"
                 }    
                }
            var players = JSON.parse(data);
            var player = players["player"+req.params.id];
            if (req.params.id<0 || req.params.id>9){
                res.end( 'playerId out of range' );
            } else {
                console.log(player);
                var sneakers = player.sneakers;
                console.log(sneakers);
                var sneaker = sneakers[req.params.sid];
                if (req.params.sid<0 || req.params.sid>4){
                    res.end('sneakerId out of range');
                } else{
                    res.end( sneaker );
                }
                }
        }
     });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})