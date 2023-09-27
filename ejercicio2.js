let anguloInicial = Math.floor(Math.random() * 360);
let vueltas = Math.floor(Math.random() * 11) + 5;
let anguloFinal = (anguloInicial + vueltas * 360) % 360;
console.log("Posición o ángulo Inicial G.A.:", anguloInicial);
console.log("Valor Aleatorio Generado en Grados:", vueltas * 360);
console.log("Ángulo Final:", anguloFinal);