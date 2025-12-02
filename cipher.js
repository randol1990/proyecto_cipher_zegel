window.cipher = {
  // Función para cifrar mensaje
  encode: (Offset, string) => {
    let result = "";
    // Aseguramos que el desplazamiento sea positivo y dentro del rango [0, 25]
    const shift = parseInt(Offset) % 26;

    for (let i = 0; i < string.length; i++) {
      const charCode = string.charCodeAt(i);
      let newCharCode;

      // 1. Manejar Mayúsculas (ASCII 65-90)
      if (charCode >= 65 && charCode <= 90) {
        // Fórmula: E(x) = (x + n) mod 26
        // x es la posición de la letra (0-25). n es el desplazamiento.
        // charCode - 65 nos da la posición (0-25)
        // Agregamos el desplazamiento (shift)
        // Aplicamos el módulo 26 para "volver" al inicio del alfabeto
        // Sumamos 65 para volver al código ASCII
        newCharCode = ((charCode - 65 + shift) % 26) + 65;

      // 2. Manejar Minúsculas (ASCII 97-122)
      } else if (charCode >= 97 && charCode <= 122) {
        // Mismo principio, pero con el offset de las minúsculas (97)
        newCharCode = ((charCode - 97 + shift) % 26) + 97;

      // 3. Manejar otros caracteres (números, espacios, signos de puntuación)
      } else {
        newCharCode = charCode;
      }

      result += String.fromCharCode(newCharCode);
    }

    return result;
  },


  // Función para descifrar mensaje

  decode: (Offset, string) => {
    let result = "";
    // Para descifrar, simplemente usamos un desplazamiento negativo: -Offset
    // O, más seguro, (26 - (Offset % 26)) para garantizar un desplazamiento positivo.
    const shift = 26 - (parseInt(Offset) % 26);

    for (let i = 0; i < string.length; i++) {
      const charCode = string.charCodeAt(i);
      let newCharCode;

      // 1. Manejar Mayúsculas (ASCII 65-90)
      if (charCode >= 65 && charCode <= 90) {
        // Fórmula: D(x) = (x - n) mod 26
        // Usamos el 'shift' positivo calculado arriba, que es el equivalente a -n
        newCharCode = ((charCode - 65 + shift) % 26) + 65;

      // 2. Manejar Minúsculas (ASCII 97-122)
      } else if (charCode >= 97 && charCode <= 122) {
        newCharCode = ((charCode - 97 + shift) % 26) + 97;

      // 3. Manejar otros caracteres
      } else {
        newCharCode = charCode;
      }

      result += String.fromCharCode(newCharCode);
    }

    return result;
  }

}