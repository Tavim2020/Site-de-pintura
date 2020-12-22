

// importar a dependecia do sqlite3
var sqlite3 = require('sqlite3').verbose();

// criar o objeto que ira fazer interação no banco de dados
var db = new sqlite3.Database('./src/database/database.db');


// cria um modulo para exportação para outras paginas javaScript
module.exports = db



// db.serialize(() =>{

//     // com comandos sqlite eu vou

//     // 1 criar uma tabela
//     db.run(`
//     CREATE TABLE IF NOT EXISTS clientes(
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT,
//         email TEXT, 
//         telefone TEXT,
//         cidade TEXT,
//         endereco TEXT,
//         numero TEXT,
//         bairro TEXT,
//         complemento TEXT,
//         descricao TEXT
//     )
//     `);


//     // 2 inserindo dados na tabela 

//     var query = `
//     INSERT INTO clientes(
//         name,
//         email,
//         telefone, 
//         cidade,
//         endereco,
//         numero,
//         bairro,
//         complemento,
//         descricao
//     ) VALUES (?,?,?,?,?,?,?,?,?)
//     `


    
//     function afterInsertData (err){
//         if (err){
//             return console.log(err)
//         } 
        
//         console.log('cadastro com sucesso');
//         console.log|(this);
//     }
    
    // db.run(query, values, afterInsertData);

    // 3 consultar dados da tabela
    // db.all(`SELECT * FROM clientes`, function(err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    
    //     console.log("Aqui estão seus registros")
    //     console.log(rows)
    // })


     //4 Deletar um dado da tabela
    // db.run(`DELETE FROM clientes WHERE id = ?`, [], function(err) {
    //     if(err){
    //         return console.log(err)
    //    }
    //     console.log("Registro deletado com sucesso!")
        
    // })
// })



