const Sequelize = require('sequelize')
const sequelize = new Sequelize('usuarios', 'root', '1234' , {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})
