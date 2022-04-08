const express = require('express'); //

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/mensagem', (req, res) => {
    res.send({ express: 'Esse é um dado da API interna' });
});

app.listen(port, () => console.log(`Escutando na porta ${port}`));