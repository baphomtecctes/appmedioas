document.addEventListener('keydown', function(event) {
    // Verifica si la tecla presionada es '1'
    if (event.key === '0') {
        // Llama a la función que deseas ejecutar
        cambiarvideovivo();
    }
    if (event.key === '1') {
        // Llama a la función que deseas ejecutar
        cambiarvideo();
    }
    if (event.key === '2') {
        // Llama a la función que deseas ejecutar
        cambiarvideo2();
    }
    if (event.key === '3') {
        // Llama a la función que deseas ejecutar
        cambiarvideo3();
    }
    if (event.key === '4') {
        // Llama a la función que deseas ejecutar
        cambiarvideo4();
    }
});

// Función que se ejecutará cuando se presione la tecla '1'
function miFuncion() {
  alert('presiono la tecla 1')
    // Agrega aquí la lógica que deseas ejecutar al presionar la tecla '1'
}
