// var Downloader = require("./src/components/Downloader");
// var dl = new Downloader();
// var i = 0;

// //verify the arg input
// var arg = '';
// for (let j = 0; j < process.argv.length; j++) {
// arg = process.argv[j];
// }

// console.log(arg);

// var url = require('url');
// var url_parts = url.parse(arg, true);
// var query = JSON.parse(JSON.stringify(url_parts.query));

// dl.getMP3({videoId: query["v"]}, function(err,res){
//     i++;
//     if(err)
//         throw err;
//     else{
//         console.log("Song "+ i + " was downloaded: " + res.file);
//     }
// });


import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Conexión base de datos
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/myapp';
const options = {useNewUrlParser: true, useCreateIndex: true};

//routes with mongo
app.use('/api', require('./src/routes/cancion'));


// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});




// Or using promises
mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  () => { console.log('Connected to MP3 downloader,Welcome from COLOMBIA') },
  /** handle initial connection error */
  err => { console.log(err) }
);