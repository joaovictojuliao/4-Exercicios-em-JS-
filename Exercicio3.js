const faturamentoDiario = [45.2, 68.3, 37.6, 0, 58.9, 92.1, 0, 72.4, 84.6, 63.7, 51.8, 76.9, 88.2, 42.3, 65.7, 79.8, 91.2, 54.3, 0, 67.5, 82.4, 74.1, 48.6, 56.9, 39.5, 71.8, 62.5, 58.7, 85.4, 72.6];
let menorFaturamento = faturamentoDiario[0];
let maiorFaturamento = faturamentoDiario[0];
let totalFaturamento = 0;
let numDiasComFaturamento = 0;

for (let i = 0; i < faturamentoDiario.length; i++) {
    const faturamento = faturamentoDiario[i];

    if (faturamento < menorFaturamento) {
        menorFaturamento = faturamento;
    }

    if (faturamento > maiorFaturamento) {
        maiorFaturamento = faturamento;
    }
  
    if (faturamento > 0) {
        totalFaturamento += faturamento;
        numDiasComFaturamento++;
    }
}

const mediaFaturamento = totalFaturamento / numDiasComFaturamento;
let numDiasComFaturamentoSuperiorMedia = 0;

for (let i = 0; i < faturamentoDiario.length; i++) {
    const faturamento = faturamentoDiario[i];
    if (faturamento > mediaFaturamento) {
        numDiasComFaturamentoSuperiorMedia++;
    }
}

console.log(`Menor faturamento diário: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento diário: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento superior à média mensal: ${numDiasComFaturamentoSuperiorMedia}`);