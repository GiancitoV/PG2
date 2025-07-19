const express = require('express');
const app = express();

app.use(express.json());

app.post('/ordenar', (req, res) => {
    const numeros = req.body.numeros;

    if (!Array.isArray(numeros)) {
        return res.status(400).json({ error: 'Debes enviar un array de números en el campo "numeros"' });
    }

    const ordenados = numeros.sort((a, b) => a - b);

    res.json({ ordenados });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
