const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Datos simulados de apuestas
let apuestas = [
    { id: 1, partido: 'Equipo A vs Equipo B', cuota: 2.5 },
    { id: 2, partido: 'Equipo C vs Equipo D', cuota: 3.0 }
];

// Endpoint para obtener todas las apuestas
app.get('/apuestas', (req, res) => {
    res.json(apuestas);
});

// Endpoint para hacer una apuesta
app.post('/apostar', (req, res) => {
    const { id, cantidad } = req.body;
    const apuesta = apuestas.find(a => a.id === id);
    if (apuesta) {
        res.json({
            mensaje: `Apuesta de ${cantidad} realizada en ${apuesta.partido} con cuota ${apuesta.cuota}`
        });
    } else {
        res.status(404).json({ mensaje: 'Apuesta no encontrada' });
    }
});

app.listen(port, () => {
    console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
