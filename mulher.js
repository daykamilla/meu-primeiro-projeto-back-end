const express = require("express")
const router = express.Router() //criar a configuração da rota

const app = express()
const porta = 3333

// criar a função que mostra a resposta
// função que se refere a um verbo (get), coloca o request (requisição), response(resposta)
// .json: para mandar objetos (conjunto de informações) / .send: uma informação apenas
function mostraMulher(request, response) {
    response.json({
        nome: 'Simara Conceição',
        imagem:'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    })
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)