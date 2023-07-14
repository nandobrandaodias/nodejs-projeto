const Sequelize = require('sequelize')
const sequelize = new Sequelize('arkhadia', 'nando', '' , {
    host: ,// ipv4 do pc
    dialect: "mysql",
    port: 3306
})

sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})


// Postagem

const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.sync({force:true})

// Postagem.create({
//     titulo: "Título 2",
//     conteudo: "Como pode um peixe vivo ver fora d'água fria."
// })


// Usuário

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    }
})

// Usuario.sync({force:true})

// Usuario.create({
//     nome: "João",
//     sobrenome: "Silva",
//     email: "joao@email.com",
//     idade: 15
// })