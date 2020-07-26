const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServSchema = new Schema({
    servicio:String,
    categoria:String,
    precio:String,
    descripcion:String,
    status: {
        type: Boolean,
        default:'false'
    }

});

module.exports = mongoose.model('Servicio',ServSchema);
