const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const SMTP_Config = require('./config/smtp');
const config = require('./config/config');

const db = require('./db');


var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

server.use(express.static("public"));

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
})

server.get('/empresa', (req, res) => {
    res.sendFile(__dirname + '/html/empresa.html');
})

server.get('/servico', (req, res) => {
    res.sendFile(__dirname + '/html/servico.html');
})

server.get('/contato', (req, res) => {
    res.sendFile(__dirname + '/html/contato.html');
})

server.post('/savepoint', urlencodedParser, (req, res) =>{
 
 const name = req.body.name;
 const email = req.body.email;
 const telefone = req.body.telefone;
 const city = req.body.cidade;
 const endereco = req.body.endereco;
 const numero = req.body.numero;
 const bairro = req.body.bairro;
 const complemento = req.body.complemento;
 const descricao = req.body.descricao;


    // configurando nodemailer

const transporter = nodemailer.createTransport({
    host: SMTP_Config.host,
    port: SMTP_Config.port,
    secure: false,
    auth: {
        user: SMTP_Config.user,
        pass: SMTP_Config.pass,
    },
    tls: { rejectUnauthorized: true}
});

    transporter.sendMail({
        from: config.from,
        to: config.to,
        subject: 'E-mail com sucesso!',
        text: `Contato do Cliente = 
                nome = ${name}
                email = ${email}
                telefone = ${telefone}
                cidade = ${city}
                endereço = ${endereco}
                numero = ${numero}
                bairro = ${bairro}
                complemento = ${complemento}
                descrição = ${descricao}`
    
}).then(message => {
    console.log(message);
}).catch(err=>{
    console.log(err);
})


transporter.sendMail({
    from: config.from, 
    to: `${email}`,
    subject: 'E-mail com sucesso!',
    text: `Muito obrigado ${name}, por entrar em contato conosco.\n O mais rápido possível retornaremos!`

}).then(message => {
console.log(message);
}).catch(err=>{
console.log(err);
})


    db.serialize(() =>{
    var query = `
    INSERT INTO clientes(
        name,
        email,
        telefone, 
        cidade,
        endereco,
        numero,
        bairro,
        complemento,
        descricao
    ) VALUES (?,?,?,?,?,?,?,?,?)
    `

    var values = [
                name,
                email,
                telefone, 
                city,
                endereco,
                numero,
                bairro,
                complemento,
                descricao
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("cadastrado com sucesso")
        console.log(this)

    }
    
    db.run(query, values, afterInsertData);

})
function returnON(){
    res.redirect('/');
}

    setTimeout(returnON, 3000)
   
})

server.listen(3200);