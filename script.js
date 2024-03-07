const alturas = [];
const homens = [];
let mulheres = 0;

for (let i = 0; i < 15; i++) {
  let altura;
  do {
    altura = parseFloat(prompt(`Insira a altura da pessoa ${i + 1} (em metros): `));
    if (altura > 0) {
      break;
    }
    alert("Por favor, insira uma altura válida (número positivo).");
  } while (true);

  let sexo;
  do {
    sexo = prompt("Sexo (M para Masculino ou F para Feminino): ").toUpperCase();
    if (sexo === "M" || sexo === "F") {
      break;
    }
    alert("Por favor, insira um valor válido para o sexo (M ou F).");
  } while (true);

  alturas.push(altura);

  if (sexo === "M") {
    homens.push(altura);
  } else if (sexo === "F") {
    mulheres++;
  }
}

const maiorAltura = Math.max(...alturas);
const menorAltura = Math.min(...alturas);
const mediaAlturaHomens = homens.length > 0 ? homens.reduce((a, b) => a + b) / homens.length : 0;

console.log(`\nMaior altura: ${maiorAltura} metros | Menor altura: ${menorAltura} metros`);
console.log(
  `Média de altura dos homens: ${mediaAlturaHomens.toFixed(2)} metros`
  + (homens.length === 0 ? " (Não há homens na lista.)" : "")
);
console.log(`Número de mulheres: ${mulheres}`);
