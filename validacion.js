var form = document.getElementById("formContacto");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // frena el envío para validar primero

    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    var valido = true;


    var regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(\s+[A-Za-zÁÉÍÓÚáéíóúÑñ]+)+$/;
    if (nombre === "") {
        mostrarError("errorNombre", "El nombre es obligatorio.");
        valido = false;
    } else if (!regexNombre.test(nombre)) {
        mostrarError("errorNombre", "Ingresá nombre y apellido (solo letras).");
        valido = false;
    } else {
        limpiarError("errorNombre");
    }

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        mostrarError("errorEmail", "El correo es obligatorio.");
        valido = false;
    } else if (!regexEmail.test(email)) {
        mostrarError("errorEmail", "Ingresá un correo válido.");
        valido = false;
    } else {
        limpiarError("errorEmail");
    }

    if (mensaje === "") {
        mostrarError("errorMensaje", "El mensaje es obligatorio.");
        valido = false;
    } else {
        limpiarError("errorMensaje");
    }

    if (valido) {
        alert("Formulario enviado correctamente!");
        form.reset();
    }
});

function mostrarError(id, texto) {
    document.getElementById(id).textContent = texto;
}

function limpiarError(id) {
    document.getElementById(id).textContent = "";
}