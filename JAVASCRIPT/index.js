document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        window.location.href = "List.html";
    });

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.index("/sw.js")
            .then(reg => console.log("Service Worker registrado con éxito:", reg))
            .catch(err => console.log("Error al registrar el Service Worker:", err));
    }

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js")
            .then(reg => console.log("Service Worker registrado con éxito:", reg))
            .catch(err => console.log("Error al registrar el Service Worker:", err));
    }
    
});
