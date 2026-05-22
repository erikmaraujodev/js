/**
 *
 * functions: Blocos de de codigo reutilizaveis.
 *
 * Funções são como mini-programas que você escreve uma vez e pode usar várias vezes. Elas nos ajudam a organizar o código, evitar repetição e tornar nossos programas mais legíveis e fáceis de manter. Pense nelas como receitas: você define a receita uma vez, e pode usá-la sempre que quiser fazer o mesmo prato! (ABSTRAÇAO)
 *
 *
 */

const { StrictMode } = require("react");

//SINTAXE - maneira correta de escrever um codigo de modo que o interpretador compreenda e execute sem erros

function nome() {
  //codigo da funçao
}

//hardcode - nao indicado
function somahard() {
  console.log(1 + 1);
}

//passagem de parametros
function soma(x, y) {
  console.log(x + y);
}

// funçao que retorna valores
function soma1(x, y) {
  return x + y;
}

console.log("antes da funçao");
somahard();
console.log("depois da funçao");

soma(4, 7);
console.log(soma(4, 7)); //undefined pq minha funçao soma nao retorna valores
console.log(soma1(4, 7));
