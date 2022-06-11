// quando der erro, essa função será chamada
module.exports = {
    send: (err, req, res, code = 400)=>{

        console.log(`error: ${err}`);
        res.status(code).json({
            error:err
        });
    }
};


/* Codigo: 200,201 - Ok!
   Codigo: 400, 500 - Erro! 
   */