module.exports = app => {
    
   app.get('/', (req, res) => {     // criando e exportando rotas 

        res.statusCode = 200;
        res.setHeader ('Content-Type', 'text/html');
        res.end('<h1><center> Gerenciamento de Eventos e Pessoas </center></h1><p><center> Seja Bem vindo(a) !!! </center></p>');
     
    });


};