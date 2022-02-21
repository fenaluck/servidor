const http = require('http')
http.createServer(function (req, res) {
// Paso 1
console.log(req.url)
// Paso 2
const url = req.url
// Paso 3
if (url == '/hoy') {
// Paso 4
res.write(`${new Date()}`)
}
else if (url == '/saludos'){
    res.write(`Hola!!!`)
}
else if (url == '/pagina'){
    res.write(`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>probando el servidor</title>
    
    </head>
    <body>
        <h1>creando un servidor en express</h1>
        
    </body>
    </html>`)
}
// Paso 5
res.end()
})
.listen(8080, () => console.log('Escuchando el puerto 8080'))