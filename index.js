// ------ REQUERIMIENTOS -----------------

const express = require('express');

const app = express();
const db = require('./db');
const apiRouter = require('./routes/api');

app.use(express.json());
app.use('/api', apiRouter);



// ----------- PRUEBA FUNCIONAMIENTO ----------------
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});


//------------- CONECTAMOS CON EL PUERTO 3000 -------------
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});