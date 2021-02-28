// ------ REQUERIMIENTOS -----------------

const express = require('express');

const app = express();

app.use(express.json());



// ----------- PRUEBA FUNCIONAMIENTO ----------------
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});


//------------- CONECTAMOS CON EL PUERTO 3000 -------------
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});