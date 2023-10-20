// Inicializa el número de juego anterior manualmente
let NroDeJuegoAnterior = 1;

// Función para generar el nuevo número de juego
function generarNroDeJuego() {
  // Verifica que el número de juego anterior esté en el rango permitido
  if (NroDeJuegoAnterior >= 1 && NroDeJuegoAnterior < 9) {
    // Incrementa el número de juego anterior en 1 para obtener el nuevo número de juego
    let NroDeJuego = NroDeJuegoAnterior + 1;
    
    // Actualiza el número de juego anterior con el nuevo valor
    NroDeJuegoAnterior = NroDeJuego;
    
    // Devuelve el nuevo número de juego
    return NroDeJuego;
  } 
  else {
    // Si el número de juego anterior está fuera del rango, muestra un mensaje de error
    return "El número de juego anterior está fuera del rango permitido (debe ser mayor o igual a 1 y menor que 9).";
  }
}

// Ejemplo de uso:
console.log(generarNroDeJuego()); // Genera el primer número de juego (debería ser 2)
console.log(generarNroDeJuego()); // Genera el siguiente número de juego (debería ser 3)
