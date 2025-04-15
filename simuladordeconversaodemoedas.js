let real = 199;
let dolar = real / 5.2;
let euro = real / 5.7;

console.log(
  real.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
console.log(
  dolar.toLocaleString("pt-BR", { style: "currency", currency: "USD" })
);
console.log(
  euro.toLocaleString("pt-BR", { style: "currency", currency: "EUR" })
);
