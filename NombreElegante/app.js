const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function esNombreElegante(nombre) {
    return nombre.charAt(0) === 'a' && nombre.charAt(nombre.length - 1) === 'a';
}

app.post('/verificar', (req, res) => {
    const nombre = req.body.nombre.toLowerCase();
    const resultado = esNombreElegante(nombre);
    res.send(resultado ? 'true' : 'false');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});