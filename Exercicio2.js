
const num = 7;

let a = 0;
let b = 1;
let encontrado = false;

while (b <= num) {
  if (b === num) {
    encontrado = true;
    break;
  }

  const temp = b;
  b = a + b;
  a = temp;
}

if (encontrado) {
  console.log(`${num} faz parte da sequência de Fibonacci.`);
} else {
  console.log(`${num} não faz parte da sequência de Fibonacci.`);
}