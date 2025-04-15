let produto = 89.90;
let desconto = produto/1.10;

console.log(produto.toFixed(2).replace('.', ','));
console.log("o valor em real é " + desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
