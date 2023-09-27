// Función para simular una tirada de ruleta
function simularTirada() {
    const minVueltas = 5;
    const maxVueltas = 10;
    const minNumero = 0;
    const maxNumero = 36;
  
    // Genera un número aleatorio de vueltas entre 5 y 10
    let vueltas = Math.floor(Math.random() * (maxVueltas - minVueltas + 1)) + minVueltas;
    vueltas = vueltas * 36
    // Calcula el número que cayó en la ruleta
    const numeroCaido = (Math.floor(Math.random() * (maxNumero - minNumero + 1)) + minNumero) % 37;
  
    return { vueltas, numeroCaido };
  }
  
  // Simula 10 tiradas e imprime los resultados
  for (let i = 1; i <= 10; i++) {
    const resultado = simularTirada();
    console.log(`Nro de Juego: ${i}`);
    console.log(`Valor Aleatorio Generado: ${resultado.vueltas}`);
    console.log(`Nro que cayó en la ruleta: ${resultado.numeroCaido}`);
    console.log();
  }