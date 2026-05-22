// var cat1 = document.getElementById("cat1");
// console.log(cat1.value);

// var cat1 = Number(document.getElementById("cat1").value);
// var cat2 = Number(document.getElementById("cat2").value);

// var hip = Math.sqrt(cat1 ** 2 + cat ** 2);
// console.log(`Hipotenusa: ${hip}`);

// como mostrar o resultado no html
// document.getElementById("resposta").innerHTML = hip;

var inputs = document.getElementsByTagName("input");
console.log(inputs); //mostra coleçao
console.log(inputs[0].value); // mostra o primeiro item da colecao
console.log(inputs[1].value); // mostra o segundo item da colecao

//
var flex = document.querySelectorAll("flex");
console.log(flex);

var flex1 = document.querySelector(".flex");
console.log(flex1);

//eventos de clique
var btn2 = document.getElementById("botao2");
btn2.addEventListener("click", function () {
  alert("botao 2 foi clicado!");
});

var btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener("click", () => {
  var cat1 = Number(document.getElementById("cat1").value);
  var cat2 = Number(document.getElementById("cat2").value);
  var hip = Math.sqrt(cat1 ** 2 + cat2 ** 2);
  document.getElementById("resposta").innerHTML = hip;
});
