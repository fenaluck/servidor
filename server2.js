// primero importo la libreria
const express = require('express');
const { fstat } = require('fs');
// segundo creo la aplicacion y lo dejo en la variable 'app'
const app = express()

// configuro la carpeta de los archivos estaticos
app.use(express.static('static'))

// cuarto defino las rutas

app.get('/crear',async(req, res)=>{
    console.log(req.query)
    await fs.writeFile(
        `archivos/${req.query.archivo}`, 
        req.query.contenido, 
        'utf-8'
        );
    res.send('archivo creado')
})
  
// Ejemplo de uso de parámetros de la URL
  app.get('/animal', (req, res) => {
    let id_animal = req.query.id;
    if (!id_animal) {
      return res.send('Falta la ID del animal')
    }
    const animal = animales.find(x => x.id == id_animal)
  
    if (!animal) {
      return res.send(`No existe un animal para la ID ${id_animal}`)
    }
  
    res.send(`El animal encontrado es un ${animal.nombre}`)
  });
  
  // 4. Ejecuto el servidor
  app.listen(3000, function () {
    console.log('Servidor andando en el puerto 3000');
  })