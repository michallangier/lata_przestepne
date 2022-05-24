const isOdd = require("is-odd");
let rok = 2004;
let nieJestPrzestepny = `Rok ${rok} nie jest przestępny`;
let jestPrzestepny = `Rok ${rok} jest przestępny`;
let wynik = isOdd(rok) ? nieJestPrzestepny : isOdd(rok / 2) ? nieJestPrzestepny : jestPrzestepny;
console.log(wynik);
