//importar o mongoose
const mongoose = require('mongoose')

//criar a estrutura para o armazenamento das informações do usuário 
const modelo = mongoose.Schema({
  data:Date,
  tipo:String,
  entrega: String,
  disciplina:String,
  instrucoes:String,
  usuarios:String
})

//gravar a estrutura na model usuarios
const atividades = mongoose.model('atividades',modelo)

//exportar os dados para acesso externo
modulo.exports = atividades