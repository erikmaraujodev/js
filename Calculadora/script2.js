// 1. Seleção dos elementos do HTML
const display = document.getElementById("display");
const botoes = document.querySelectorAll("button");

// Variável que guarda o que está sendo digitado
let expressaoAtual = "0";

// 2. Ouvinte de eventos para todos os botões
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const valor = botao.value;

    // Verifica qual botão foi clicado e chama a função certa
    switch (valor) {
      case "C":
        limpar();
        break;
      case "Backspace":
        apagarUltimo();
        break;
      case "=":
        calcular();
        break;
      case "+/-":
        inverterSinal();
        break;
      case "%":
        porcentagem();
        break;
      case ",":
        adicionarVirgula();
        break;
      default:
        // Se for um número ou operador (+, -, *, /)
        adicionarAoDisplay(valor);
        break;
    }
  });
});

// 3. Funções de Funcionamento da Calculadora

function atualizarDisplay() {
  // Troca o '*' por ' x ' visualmente para ficar mais bonito na tela
  display.textContent = expressaoAtual.replace(/\*/g, " x ");
}

function limpar() {
  expressaoAtual = "0";
  atualizarDisplay();
}

function apagarUltimo() {
  if (expressaoAtual.length > 1) {
    expressaoAtual = expressaoAtual.slice(0, -1);
  } else {
    expressaoAtual = "0";
  }
  atualizarDisplay();
}

function adicionarAoDisplay(valor) {
  // Se tiver apenas o "0" inicial, substitui pelo número clicado
  if (expressaoAtual === "0" && !isNaN(valor)) {
    expressaoAtual = valor;
  } else {
    expressaoAtual += valor;
  }
  atualizarDisplay();
}

function adicionarVirgula() {
  const ultimoCaractere = expressaoAtual.slice(-1);
  // Só adiciona o ponto decimal se o último caractere for um número
  if (!isNaN(ultimoCaractere) && !expressaoAtual.endsWith(".")) {
    expressaoAtual += ".";
    atualizarDisplay();
  }
}

function inverterSinal() {
  try {
    let resultado = eval(expressaoAtual);
    expressaoAtual = (resultado * -1).toString();
    atualizarDisplay();
  } catch {
    display.textContent = "Erro";
  }
}

function porcentagem() {
  try {
    let resultado = eval(expressaoAtual);
    expressaoAtual = (resultado / 100).toString();
    atualizarDisplay();
  } catch {
    display.textContent = "Erro";
  }
}

function calcular() {
  try {
    // O eval faz o cálculo matemático da string (ex: "2+3*5")
    let resultado = eval(expressaoAtual);

    // Se der um número decimal muito longo, limita em 4 casas
    if (!Number.isInteger(resultado)) {
      resultado = parseFloat(resultado.toFixed(4));
    }

    expressaoAtual = resultado.toString();
    atualizarDisplay();
  } catch (erro) {
    display.textContent = "Erro";
    expressaoAtual = "0";
  }
}
