console.log("O JavaScript foi vinculado com sucesso!");

let botoes = document.querySelectorAll("button");
let display = document.getElementById("display");
// console.log(display);
const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operadores = ["+", "-", "*", "="];
let primeiroNumero = "";
let segundoNumero = "";
let operador = "";

// i = 0;
// botoes.forEach((botao) => {
//   console.log(i, botao);
//   i++;
// });

//Laço de repetiçao que percorre todos os botoes da calculadora
botoes.forEach((botao) => {
  //console.log(botao);

  //evento de clique para cada botao
  botao.addEventListener("click", () => {
    //console.log(botao.value);

    //armazena o valor do botao clicado
    const valor = botao.value;
    if (numeros.includes(valor)) {
      montarDisplay(valor);
    }
    if (valor.toLowerCase() === "c") {
      limparDisplay();
    }
    if (valor.toLocaleLowerCase() === "backspace") {
      backspace();
    }

    if (operadores.includes(valor)) {
      if (valor === "=") {
        segundiNumero = number(display.innerText);
        display.innerText = Calcular(primeiroNumero, segundoNumero, operador);
        console.log(primeiroNumero, segundoNumero, operador);
        primeiroNumero = "";
        segundoNumero = "";

        return;
      }
      if (primeiroNumero === "") {
        primeiroNumero = number(display.innerText);
      } else {
        segundoNumero = number(display.innerText);
        primeiroNumero = calcular(primeiroNumero, segundoNumero, operador);
      }
      limparDisplay();
      operador = valor;

      console.log(primeiroNumero.segundoNumero, operador);
    }
  });
});

function calcular(primeiroNumero, segundoNumero, operador) {
  switch (operador) {
    case "+":
      return primeiroNumero + segundoNumero;

    case "-":
      return primeiroNumero - segundoNumero;
    
      case "*"
         return primeiroNumero * segundoNumero;

          case "*"
         return primeiroNumero / segundoNumero;

    default:
      return;
  }
}

function limparDisplay() {
  display.innerText = "0";
}

function backspace() {
  let novoDisplay = display.innerText;
  display.innerText = novoDisplay.slice(0, -1);
}

//montar display
function montarDisplay(numEscolhido) {
  // console.log(display.innerText.length);
  let textDisplay = display.innerText;

  if (numEscolhido === "." && textDisplay === "0s") {
    return;
  }

  //test se o conteudo do display e 0 e tem tamanho 1 (1 caracter)
  if (textDisplay.length === 1 && textDisplay === "0") {
    //substitui o 0 pelo valor recebido
    display.innerText = numEscolhido;
  } else {
    //contena os valores recebidos
    display.innerText += numEscolhido;
  }
}

function limparDisplay() {
  display.innerText = "0";
}
