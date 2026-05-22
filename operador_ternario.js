let numero = 10;
let tipoNumero;

if (numero % 2 === 0) {
  tipoNumero = "par";
} else {
  tipoNumero = "Impar";
}
console.log(tipoNumero); //saida: par

//operador ternario

tipoNumero = numero % 2 === 0 ? "par" : "impar";
console.log(tipoNumero);
