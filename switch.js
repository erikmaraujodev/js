var curso = "word";

// alternativa ao if para evitar encadeamentos que ocasiona dificuldade de entendimento,
// codigo de dificil manutençao
switch (curso) {
  // caso seja excel executa o codigo abaixo, ate o break
  case "excel":
    console.log("Voce esta matriculado no curso de excel");
    break; // encerra a execuçao dentro do escopo do switch dando continuidade ao codigo apos o switch

  case "word":
    console.log("Voce esta matriculado no curso word");
    break;

  default:
    console.log("O curso informado nao esta disponivel");
}

console.log("final");
