const express = require("express");
const app = express();

// rota inicial
app.get("/", (req, res) => {
  res.send("<h1>Bem vindo, Professor novamente!</h1>");
});

// rota de aula
app.get("/curso", (req, res) => {
  res.send("<h1>Aprendendo a ADS!</h1>");
});

// rota com parâmetro obrigatório
app.get("/cadeira/:parametro", (req, res) => {
  res.send("Aula de: " + req.params.parametro);
});

// rota com parâmetro opcional (correção aqui!)
app.get("/aluno/{:nome}", (req, res) => {
  const nome = req.params.nome;
  if (nome) {
    res.send(`<h1>Aluno ${nome} presente!</h1>`);
  } else {
    res.send("Aluno ausente!");
  }
});

// inicia o servidor
app.listen(process.env.PORT ?? 4000, (erro) => {
  if (erro) {
    console.log("Erro ao Iniciar.");
  } else {
    console.log("Servidor Iniciado.");
  }
});


