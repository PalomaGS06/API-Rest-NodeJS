// const conexao = require('../database/Conexao');

// class Pessoas {
//     adicionar(pessoa, res) {

//         conexao.query(sql, (err, confirmado) => {
       
//             if (err) {
//                 app.utils.error.send(err, req, res); //mostra erros na tela
//             } else {
//                 res.status(200).json(pessoa);
//             }
//         });
//     }

//     consultar(res) {
//         const sql = 'SELECT * FROM Pessoas';

//         conexao.query(sql, (err, confirmado) => {
//             if(err) {
//                 app.utils.error.send(err, req, res);
//             } else {
//                 res.status(200).json(confirmado);
//             }
//         });
//     }

//     buscarId(id, res) {

//         const sql = `SELECT * FROM Pessoas WHERE id = ${id}`; 

//         conexao.query(sql, (err, confirmado) => {
            
//             const pessoa= confirmado[0];
//             if(err) {
//                 app.utils.error.send(err, req, res);
//             } else {
//                 res.status(200).json(pessoa);
//             }
//         });
//         };    


//     atualizar(id, err) {
    
//         const sql = 'UPDATE Pessoas SET ? WHERE id=?';
//         conexao.query(sql, [alterado, id], (err, res) => {
//             if(err) {
//                 app.utils.error.send(err, req, res);
//             } else {                
//                 res.status(200).json({
//                     id
//                 });
//             }
//         });
//     }

//     deletar(id, res) {
//         const sql = `DELETE FROM Pessoas WHERE id = ${id}`;

//         conexao.query(sql, (err, res) => {
//             if(err) {
//                 app.utils.error.send(err, req, res);
//             } else {            
//                 res.status(200).json({
//                     id
//                 });
//             }
//         });
//     }
// }

// module.exports = new pessoa;
