// se cargan las librerias
const { clear } = require('console');
const express= require('express');
const app = express();
const fs = require ('fs');
//configura carpeta de archivos
app.use(express.static('static'));
// definir las rutas
app.get('/ejemplo', (req, res)=>{
    console.log('esta es la ruta de ejemplo');
    res.send('hola');
})
 // crea el archivo   
app.get('/crear', (req, res)=>{
    console.log(req.query);
    const archivo = `archivos/${req.query.archivo}`;
    const contenido = req.query.contenido;
    fs.writeFile(archivo, contenido, 'utf8', function(){
        res.send('archivo creado');
    });      
    console.log('archivo creado correctamente')
})
 // lee el archivo   
 app.get('/leer', (req, res)=>{
    console.log(req.query);
    const archivo = `archivos/${req.query.archivo}`;
    fs.readFile(archivo,'utf8', function(err, data){
        console.log('data')
        res.send('data');
    });      
})
// renombrar archivo   
app.get('/renombrar', (req, res)=>{
    console.log(req.query);
    const archivo = `archivos/${req.query.nombre}`;
    const newarchivo = `archivos/${req.query.nuevoNombre}`;
    fs.rename(archivo, newarchivo, function(){
        res.send('archivo renombrado');
    });  
    console.log('archivo renombrado correctamente')    
})
// borrando archivo   
app.get('/eliminar', (req, res)=>{
    console.log(req.query);
    const archivo = `archivos/${req.query.archivo}`;
    fs.unlink(archivo, function(){
        
        res.send('archivo borrado');
    });  
    console.log('archivo borrado correctamente');
     
})
// envia una respuesta 
app.listen(3001, function(){
    console.log('servidor corriendo en el puerto 3001');
})
