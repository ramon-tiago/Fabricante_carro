const express = require('express');
const rotas = require('./rotas');

require('./database')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(rotas);

const porta = 3040
app.listen(porta,() => console.log(`Backend Carros ok na porta: ${porta}`))