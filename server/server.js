const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const app = express();
 

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.json({
      'mensaje' : 'Bienvenido al momento2 donde encontraras registro de datos'
    })
});

app.get('/database', function (req, res) {
    res.json({
        'mensaje' : 'Conexion exitosa'
      })
  });
  
  app.get('/saludo/:nombre', function (req, res) {
    if (req.params.nombre >=3 && req.params.nombre <=40){
    res.json({
        'mensaje' : `Bienvenido  ${req.params.nombre}  `  
    })
    } else {
        res.json({
            'mensaje' : `la longitud minima del nombre esta entre 3 y 40 caracteres  `  
        })
    }        

});
app.get('/edad/:xy', function (req, res) {
    
    if(req.params.edad >= 0 && req.params.edad <= 150){
        res.json({
            'mensaje' : `Eres mayor de edad`  
        }) 

   } else {
    res.json({
        'mensaje' : `No eres mayor de edad`  
    }) 
   }         

});

mongoose.connect('mongodb://localhost:27017/momento2',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err,res)=> {
    if(err) throw err;
        console.log('Conectado a la BD');
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`servidor online en el puerto ${port}`);
})