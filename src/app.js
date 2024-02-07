const express = require('express');
const app = express();
const port = 3000;

// criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Curso Node JS')
});

app.listen(port,()=>{
console.log(`Servidor rodando na porta http://localhost:${port}`);
});