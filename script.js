const express = require("express")
const app = express()

app.listen(3000, function(){
  console.log("Servidor ativo")
})

app.get("/", function(req,res){
  console.log("pagina principal")
  res.send("Pagina principal")
})

app.get("/cadastrar", function(req,res){
  console.log("Pagina de cadastro")
  res.send("Pagina de cadastro")
})

app.get("/produtos/:item/:quantidade", function(req,res){
  res.send("Página de produtos: "+ req.params.item + "quantidade: " + req.params.quantidade)
})

app.get("/contato", function(req,res){
  res.send("Pagina de contato: " + req.params.contato)
})