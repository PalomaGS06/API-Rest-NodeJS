const express = require ('express');
const consign = require ('consign'); //Consign lê todas as rotas 
const bodyParser = require ('body-Parser');
const Conexao= require('./database/Conexao'); //conexão do banco de dados
const Tabelas = require('./database/Tabelas'); //exportando a classe Tabelas 

let app = express();

    //retornando informações do servidor http.
app.use (bodyParser.urlencoded({extended : false})); // exibe para a url
app.use (bodyParser.json()); // recebe dados via json

consign().include('controller').into(app); //agrupa as pastas. Inclui a pasta "controllers" para "app"


   Tabelas.init(Conexao); //iniciar tabela
   

app.listen(3000, '127.0.0.1', () => { 

    console.log (" Servidor conectado!") //função callback

});