/**
 * objects e arrays
 *
 *ano-criaçao-do-jogo - formato snack case
 *anoCriacaoDoJogo - formato camel case
 *
 */

//  OBJETOS
var jogo = {
  nome: "angry birds",
  anoCriacao: "2000",
  contexto: "Vilao pegou ovos dos passaros e eles lutam para recupera-los",
  ativo: true,
};
console.log(jogo);
console.log(jogo.nome);

if (jogo.ativo) {
  console.log(`o jogo ${jogo.nome} esta ativo: BORA JOGAR!!!`);
} else {
  console.log(`o jogo ${jogo.nome} nao esta ativo. Escolha outro!`);
}

// ARRAYS
var cores = ["verde", "amarelo", "azul", "branco"];
// indices      0         1         2        3

console.log(cores[0]); // verde
console.log(cores[3]); // branco
console.log(cores.length); //4
console.log(cores[4 - 1]); //console.log(cores[cores.length - 1]); // branco

var myArray = [100, false, "Senac", { nome: "Erik", idade: 19 }, null];
console.log(myArray);
console.log(myArray[3].nome);
