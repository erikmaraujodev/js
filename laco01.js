/**
 * laço de repetiçao
 * FOR ou WHILE ou do WHILE
 *
 */
// Tabuada sem laço de repetiçao

let num = 3;
console.log(`${num} x 1: ${num * 1}`);
console.log(`${num} x 2: ${num * 2}`);
console.log(`${num} x 3: ${num * 3}`);
console.log(`${num} x 4: ${num * 4}`);
console.log(`${num} x 5: ${num * 5}`);
console.log(`${num} x 6: ${num * 6}`);
console.log(`${num} x 7: ${num * 7}`);
console.log(`${num} x 8: ${num * 8}`);
console.log(`${num} x 9: ${num * 9}`);
console.log(`${num} x 10: ${num * 10}`);

//  inst var ; cond ; incremento
//  i++ => i = i + i
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// Tabuada com laço de repetiçao
for (var i = 1; i <= 10; i++) {
  console.log(`${num} x ${1}: ${num * 1}`);
}

// Tabuada com laço de repetiçao while
// WHILE nao tem incremento/decremento automatico
i = 0;
console.log("##### WHILE #####");
console.log(`i = ${i}`);
while (i <= 2) {
  i++;
  console.log(`${num} x ${i}: ${num * i} `);
}

i = 0;
while (i <= 10) {
  console.log(`${num} x ${i}: ${num * i}`);
  i++;
}

i = 1;
do {
  console.log(`${num} x ${i}: ${num * i}`);
  i++;
} while (i < 10);

//  FOR EACH
let arry = ["maça", "banana", "laranja"];
array.forEach((fruta) => {
  console.log(fruta);
});

// function nome () {
//  //logica de funçao
// }

// () => {

// }
