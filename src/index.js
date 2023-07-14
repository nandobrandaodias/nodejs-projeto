const express = require('express')
const app = express()
const PORT = 3000
var sayName = require("./nome")
const conexao = require("./teste")

app.get('/', function(req, res){
    res.sendFile(__dirname + "/html/index.html")
    // console.log(sayName())
})

app.get('/sobre', function(req, res){
    res.send("Minha página: Sobre!")
})

app.get('/ola/:profissao/:nome', function(req, res){
    res.send(
        "<h1>Olá " + req.params.nome + ", sua profissão é: " 
        + req.params.profissao + ". </h1>"
    )
})

app.post('/', function(req, res){
    res.send("app POST")
})

app.delete('/', function(req, res){
    res.send("app DELETE")
})

app.listen(PORT, function(){
    console.log(`Servidor rodando na porta: ${PORT}`)
})