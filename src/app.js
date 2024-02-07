
import express from 'express';
const app = express()

//indicar para o express ler o body com json
app.use(express.json())


//Mock termo usado para utilizar uma estrutura de dados para testes
const  selecoes = [
    {id:1, selecao:'Brasil', grupo:'G'},
    {id:2, selecao:'Suiça', grupo:'G'},
    {id:3, selecao:'Sérvia', grupo:'G'},
    {id:4, selecao:'Camarões', grupo:'G'},
]

// criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Curso Node JS')
});

app.get( '/selecoes', ( req, res )=>{
    res.status(200).send(selecoes);
})

//estando inserindo dados na estrutura body significa o corpo da página 
app.post( '/selecoes', ( req, res )=>{
   selecoes.push(req.body)
   res.status(201).send('Seleções cadastrada com sucesso!')
})

export default app
