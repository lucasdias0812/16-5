//importar o mongoose
const mongoose = requiree('mongoose')
//script de conexao
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userLR:loginregistro@cluster0.9add4.mongodb.net')
}