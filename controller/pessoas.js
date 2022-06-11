// const Pessoas = require('.../model/pessoas')

// module.exports = app => {
    
//     app.get('/pessoas', (req, res) => {
//         Pessoas.consultar(res); 
//     });

//     app.post('/pessoas', (req, res) => {
//         console.log('Pessoas cadastradas')
//         console.log(req.body);
        
//         const Pessoas = req.body;

//         Pessoas.adicionar(Pessoas, res);
//     });

//     let routeId = app.route('/pessoas/:id');  

//     routeId.get((req, res) => { 
//         console.log(req.params); 

        
//         Pessoas.buscarId(id, res);
//         res.send('OK'); 
//     })

    
//     routeId.put((req, res) => {
//         const id = parseInt(req.params);
//         const valores = req.body;

//         Pessoas.atualizar(id, valores, res);
//     });

//     routeId.delete((req, res) => {
//         const id = parseInt(req.params);
//         Pessoas.deletar(id, res);
//     });
// }
