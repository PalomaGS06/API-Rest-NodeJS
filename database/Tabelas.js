class Tabelas {
    init(Conexao) {
        this.Conexao = Conexao;

        this.TodosEventos();
        this.Pessoas();
    }

    TodosEventos() {
        let sql = 'CREATE TABLE IF NOT EXISTS Eventos ('
                    + 'id_evento int NOT NULL AUTO_INCREMENT,'
                    + ' FOREIGN KEY(id), FOREIGN KEY(qtd), PRIMARY KEY(id_evento), '
                    + 'data datatime NOT NULL, horario time NOT NULL, '
                    + 'nome_evento varchar(20) NOT NULL)';

             sql = 'CREATE TABLE IF NOT EXISTS Pessoas ('
                    + 'id int NOT NULL AUTO_INCREMENT, qtd int(100) NOT NULL,'
                    + ' PRIMARY KEY(id), FOREIGN KEY(id_evento),  '
                    + 'nome varchar(40) NOT NULL, contato int NOT NULL)';

        this.Conexao.query(sql, err => { //testando a conexão com as consultas requisitadas
            if(err) {
                console.log(err);
            } else {
                console.log('Tabelas criadas com sucesso.');
                
            }
        });
    }
}

module.exports = new Tabelas;