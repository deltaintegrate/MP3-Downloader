import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cancionSchema = new Schema({
  nombre: {type: String, required: [true, 'cancion obligatoria']},
  descripcion: String,
  usuarioId: String,
  date:{type: Date, default: Date.now},
  activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Cancion = mongoose.model('cancion', cancionSchema);

export default Cancion;