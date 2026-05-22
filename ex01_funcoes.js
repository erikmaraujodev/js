/**
 * Desenolver uma calculadora utilizando funçoes
 * somente para operaçoes basicas (* / + -)
 *
 *
 */

// Quantas funçoes eu vou precisar? -> 4 (por enquanto)

function soma(x, y) {
  return Number(x) + Number(y);
}
function subtracao(x, y) {
  return x - y;
}

function multiplicacao(x, y) {
  return x * y;
}

function divisao(x, y) {
  if (y === 0) {
    return "nao existe divisao por 0 (zero)";
  }
  return x / y;
}
//crie 1 exemplo para utilizar cada uma das funçoes

// console.log(soma(primeiroNumero, segundoNumero));
// console.log(subtracao(4, 3));
// console.log(multiplicacao(4, 3));
// console.log(divisao(4, 0));
//console.log(`o valor de x é: ${x}`); //erro pois a variavel x pertence ao escopo das funçoes

//melhorar o codigo para automaçao
// inserir opçao de operador

//     if operador = "+";
// resultado = soma(primeiroNumero, segundoNumero)

//     if (operador === "-")
//   resultado = subtracao(primeiroNumero, segundoNumero);

//     if (operador === "*")
//   resultado = multiplicacao(primeiroNumero, segundoNumero);

//     if (operador === "/") {
//   resultado = divisao(primeiroNumero, segundoNumero);
//console.log(`o resultado é: ${resultado}`);
// }2

let operador;
let primeiroNumero;
let segundoNumero;
// let resultado;

function calculadora(primeiroNumero, segundoNumero, operador) {
  /**if ((operador = "+")) resultado = soma(primeiroNumero, segundoNumero);

  if (operador === "-") resultado = subtracao(primeiroNumero, segundoNumero);

  if (operador === "*")
    resultado = multiplicacao(primeiroNumero, segundoNumero);

  if (operador === "/") {
    resultado = divisao(primeiroNumero, segundoNumero);
  }
  return resultado;
 */
  switch (operador) {
    case "+":
      return soma(primeiroNumero, segundoNumero);
      break;

    case "-":
      return subtracao(primeiroNumero, segundoNumero);
      break;

    case "*":
      return multiplicacao(primeiroNumero, segundoNumero);
      break;

    case "/":
      return divisao(primeiroNumero, segundoNumero);
      break;
  }
}

const prompt = require("prompt-sync")();

primeiroNumero = Number(prompt("digite o primeiro numero: "));
segundoNumero = Number(prompt("digite o segundo numero: "));
operador = prompt("digite o operador: ");

console.log(
  `o resultado é: ${calculadora(primeiroNumero, segundoNumero, operador)}`,
);
