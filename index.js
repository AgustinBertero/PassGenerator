// Función para generar una contraseña aleatoria
function generarPassword(longitud) {
    const caracteresPermitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/";
    let contraseña = '';

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        contraseña += caracteresPermitidos.charAt(indiceAleatorio);
    }

    return contraseña;
}

// Función para imprimir la contraseña en la página
function imprimirContraseña(contraseña) {
    const contraseñaGenerada = document.getElementById("contraseña-generada");
    contraseñaGenerada.textContent = contraseña;
}

// Función para actualizar el valor de la longitud según el input range
function actualizarValorLongitud(valor) {
    const palabraCantidad = document.getElementById("palabra-cantidad");
    palabraCantidad.textContent = `Longitud: ${valor}`;

    // Actualizar la contraseña generada en tiempo real
    const contraseñaGenerada = generarPassword(valor);
    imprimirContraseña(contraseñaGenerada);
}

// Evento cuando se cambia el valor del input range
const inputCantidad = document.getElementById("input-cantidad");
inputCantidad.addEventListener("input", () => {
    const longitudSeleccionada = inputCantidad.value;
    actualizarValorLongitud(longitudSeleccionada);
});

// Establecer el valor inicial de longitud al cargar la página
const longitudInicial = 8;
actualizarValorLongitud(longitudInicial);
inputCantidad.value = longitudInicial;

// Evento cuando se presiona el botón para generar la contraseña
const botonGenerar = document.getElementById("boton-generar");
botonGenerar.addEventListener("click", () => {
    const longitudDeseada = inputCantidad.value;
    const contraseñaGenerada = generarPassword(longitudDeseada);
    imprimirContraseña(contraseñaGenerada);
});

// Evento cuando se presiona el botón para copiar la contraseña
const botonCopiar = document.getElementById("boton-copiar");
botonCopiar.addEventListener("click", () => {
    const contraseñaGenerada = document.getElementById("contraseña-generada").textContent;

    const textareaTemporal = document.createElement("textarea");
    textareaTemporal.value = contraseñaGenerada;
    document.body.appendChild(textareaTemporal);
    textareaTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(textareaTemporal);

    // Mostrar un aviso que se desvanece
    const aviso = document.getElementById("aviso-copiado");
    aviso.textContent = "Contraseña copiada al portapapeles";
    aviso.style.opacity = "1";
    setTimeout(() => {
        aviso.style.opacity = "0";
    }, 1000); // Cambia este valor para ajustar la duración del desvanecimiento
});


const darkModeButton = document.getElementById("dark-mode-button");
darkModeButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode"); // Aplicar la clase al elemento html
    const container = document.querySelector(".container");
    container.classList.toggle("dark-mode");
});