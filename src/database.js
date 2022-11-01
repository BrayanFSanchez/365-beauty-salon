const mongoose = require('mongoose');
const db = 'beauty_salon_365'
// const database = mongoose.connect(`mongodb+srv://Brayan:ms8mZpC2BuvsPU58@api-rest.nue8jbk.mongodb.net/${db})?retryWrites=true&w=majority`)

const database = mongoose.connect(`mongodb://mongo:27017/${db}`)

.then((/*db*/)=>{
    console.log('Conectado a la BD')
}).catch((err)=>{
    console.log('Ha ocurrido un error: ' + err)
})

module.exports = database;

