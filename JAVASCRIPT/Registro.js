document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener valores de los inputs
        const nombre = form.elements[0].value.trim();
        const usuario = form.elements[1].value.trim();
        const correo = form.elements[2].value.trim();
        const contraseña = form.elements[3].value;
        const confirmarContraseña = form.elements[4].value;

        if (!nombre || !usuario || !correo || !contraseña || !confirmarContraseña) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        if (contraseña !== confirmarContraseña) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verificar si el correo ya está registrado
        if (usuarios.some(user => user.correo === correo)) {
            alert("Este correo ya está registrado.");
            return;
        }

        // Guardar usuario en Local Storage
        const nuevoUsuario = { nombre, usuario, correo, contraseña };
        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        form.reset();
        window.location.href = "index.html";
    });

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js")
            .then(reg => console.log("Service Worker registrado con éxito:", reg))
            .catch(err => console.log("Error al registrar el Service Worker:", err));
    }
    

});
