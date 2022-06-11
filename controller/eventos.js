const Eventos = require('.../model/eventos')

module.exports = app => {
    
    app.get('/eventos', (req, res) => {
        Eventos.consultar(res); 
    });

    app.post('/eventos', (req, res) => {
        console.log('Eventos cadastrados')
        console.log(req.body);
        
        const Eventos = req.body;

        Eventos.adicionar(Eventos, res);
    });

    let routeId = app.route('/eventos/:id_evento');   // O ":" vai pegar somente o valor do parametro, no caso, id

    routeId.get((req, res) => { 
        console.log(req.params); 
                
        Eventos.buscarId(id_evento, res);
        res.send('OK'); 
    })

    
    routeId.put((req, res) => {
        const id_evento = parseInt(req.params);
        const valores = req.body;

        Eventos.atualizar(id_evento, valores, res);
    });

    routeId.delete((req, res) => {
        const id_evento = parseInt(req.params);
        Eventos.deletar(id_evento, res);
    });
}



