const express = require("express") //require = traga para o computador > traga o pacote express

const app = express()
const porta = 3333

// função: são identificadores que guardam conjuntos de instruções com ações para serem chamados no nosso código
// para declarar: function > identificador (verbos) > parênteses > chaves e instruções

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

//mostraPorta()
app.listen(porta, mostraPorta)

// para rodar no Terminal: node server