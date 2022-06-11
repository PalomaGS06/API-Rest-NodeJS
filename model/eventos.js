const moment = require('moment'); // O moment manipula datas
const conexao = require('../database/Conexao');

class Eventos {
    adicionar(evento, res) {
        
        const horario = moment().format('YYYY-MM-DD HH:mm:ss');
        const data = moment(evento.data, 'YYYY-MM-DD').format('YYYY-MM-DD HH:mm:ss'); // formato americano de data
        
        // isSameOrAfter() compara duas datas e horarios e verifica qual vem antes ou depois da outra
        const horarioDisponivel = moment(data).isSameOrAfter(horario);

        // verifica quantas pessoas que vão participar de tais eve
        const pessoasQueVao = evento.qtd.length >= 15;

        const verificar = [
            {
                nome: 'data',
                valido: horarioDisponivel,
                mensagem: 'O dia e horário devem ser maiores ou igual a data atual'
            },
            {
                identidade_cliente: 'qtd',
                valido: pessoasQueVao,
                mensagem: 'Quantidade deve ter no minimo 15 pessoas'
            }
        ]
        const erros = verificar.filter(quantidade => ! quantidade.valida); //só aceita se for igual a valido
        const errorr = erros.length;

        if(errorr) {
            res.status(400).json(erros); //erro 400
        } else {
            const marcado = {...evento, horario, data}

                const sql = 'INSERT INTO Eventos SET ?'; // assim, vai inserindo as pessoas nos eventos
            
            conexao.query(sql, marcado, (err, confirmado) => {

                if(err) {
                    app.utils.error.send(err, req, res); //chamando "error" da pasta utils
                } else {
                    res.status(201).json(evento);
                }
            });
        }
    }

    consultar(res) {
        const sql = 'SELECT * FROM Eventos';

        conexao.query(sql, (err, confirmado) => {
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(confirmado);
            }
        });
    }

    buscarId(id_evento, res) {
        const sql = `SELECT * FROM Eventos WHERE id_evento = ${id_evento}`; // filtrando o id_evento do evento

        conexao.query(sql, (err, confirmado) => {
            
            const evento = confirmado[0];
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(evento);
            }
        });
    }

    atualizar(id_evento, alterado, res) { //alterando as datas e horas
        if(alterado.data) {
            alterado.data = moment(alterado.data, "DD/MM/YYYY").format("YYYY-MM-DD HH:MM:SS");
        }
        const sql = 'UPDATE Eventos SET ? WHERE id_evento=?';

        // Como estamos com duas incógnitas ali em cima (não sabemos qual vai ser o valor), estamos passando um array no query
        conexao.query(sql, [alterado, id_evento], (err, confirmado) => {
            if(err) {
                app.utils.error.send(err, req, res);
            } else {                
                res.status(200).json({...alterado, id_evento});
            }
        });
    }

    deletar(id_evento, res) {
        const sql = `DELETE FROM Eventos WHERE id_evento = ${id_evento}`;

        conexao.query(sql, (err, confirmado) => {
            if(err) {
                app.utils.error.send(err, req, res);
            } else {            
                res.status(200).json({id_evento});
            }
        });
    }
}

module.exports = new evento;
