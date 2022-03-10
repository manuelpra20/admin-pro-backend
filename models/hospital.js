// models para CRUD de Hospitales

const { Schema, model } = require('mongoose');

const HospitalSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
}, {  collection: 'hospitales' });

// para que en la coleccion de la DB de mongo aparezca hopitales :  {  collection: 'hospitales' }

//  renombrar las variables que me llegan de la base de datos
HospitalSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Hospital', HospitalSchema );
