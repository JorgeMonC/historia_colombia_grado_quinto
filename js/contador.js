// Función para actualizar el contador regresivo
function actualizarContador() {
    // Obtiene el elemento con ID "contador"
    var contador = document.getElementById("contador");
    
    // Obtiene la fecha y hora actual
    var ahora = new Date().getTime();

    // Fecha y hora dentro de 15 minutos
    var quinceMinutosDespues = new Date(ahora + 15 * 60 * 1000);

    // Actualiza la diferencia de tiempo cada segundo
    var intervalo = setInterval(function() {
        var tiempoRestante = quinceMinutosDespues - new Date().getTime();

        if (tiempoRestante <= 0) {
            clearInterval(intervalo); // Detiene el contador cuando el tiempo se agota
            contador.textContent = "¡Tiempo agotado!";
        } else {
            var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
            var segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);
            contador.textContent = "Tiempo restante: " + minutos + ":" + (segundos < 10 ? "0" : "") + segundos;
        }
    }, 1000);
}

// Iniciar el contador cuando la página se carga
window.onload = function () {
    actualizarContador();
};