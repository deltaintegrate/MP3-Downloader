import express from 'express';
const router = express.Router();

// importar el modelo nota
import Cancion from '../models/cancion';

// Agregar una nota
router.post('/cancion', async(req, res) => {
  const body = req.body;  
  try {
    const cancionDB = await Cancion.create(body);
    res.status(200).json(cancionDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con parámetros
router.get('/cancion/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const cancionDB = await Cancion.findOne({_id});
      res.json(cancionDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
  // Get con todos los documentos
  router.get('/cancion', async(req, res) => {
    try {
      const cancionDB = await Cancion.find();
      res.json(cancionDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

// Delete eliminar una nota
router.delete('/cancion/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const cancionDB = await Cancion.findByIdAndDelete({_id});
      if(!notaDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(notaDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
  
// Exportamos la configuración de express app
module.exports = router;