document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener referencias a los elementos del DOM usando sus IDs
    const offsetInput = document.getElementById('input-offset');
    const stringInput = document.getElementById('input-string');
    const outputResult = document.getElementById('output-result');
    const encodeButton = document.getElementById('encode-button');
    const decodeButton = document.getElementById('decode-button');

    // Función que lee los inputs, valida y llama a la función de cifrado/descifrado
    const processCipher = (operation) => {
        // Obtener valores
        const offset = offsetInput.value;
        const inputString = stringInput.value;
        
        // Validación simple
        if (!offset || inputString.trim() === "") {
            alert("Por favor, introduce un Desplazamiento (Offset) y un Texto.");
            outputResult.value = "";
            return;
        }

        let result;

        // Llamar al método correspondiente del objeto cipher
        if (operation === 'encode') {
            result = window.cipher.encode(offset, inputString);
        } else if (operation === 'decode') {
            result = window.cipher.decode(offset, inputString);
        }
        
        // Mostrar el resultado
        outputResult.value = result;
    };

    // 2. Asignar Event Listeners a los botones
    
    // Conectar el botón de Cifrar
    encodeButton.addEventListener('click', () => {
        processCipher('encode');
    });

    // Conectar el botón de Descifrar
    decodeButton.addEventListener('click', () => {
        processCipher('decode');
    });
});