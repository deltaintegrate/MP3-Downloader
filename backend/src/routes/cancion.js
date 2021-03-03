import express from 'express';
import Downloader from '../components/Downloader'
const router = express.Router();
var url = require('url');

// importar el modelo nota
import Cancion from '../models/cancion';

// Agregar una nota
router.post('/cancion', async(req, res) => {

  var dl = new Downloader();
  const body = req.body;  
  try {
    let i =0;
    console.log(body.nombre);
    var url_parts = url.parse(body.nombre, true);
    console.log("llegue aqui");
    var query = JSON.parse(JSON.stringify(url_parts.query));
    console.log(query["v"]);
    dl.getMP3({videoId: query["v"]}, function(err,res){
      i++;
      if(err)
          throw err;
      else{
          console.log("Song "+ i + " was downloaded: " + res.file);
      }
    });
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