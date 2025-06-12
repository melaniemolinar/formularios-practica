// Login
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;

        if (user === "admin" && pass === "Programacion50") {
            window.location.href = "home.html";
        } else {
            alert("Credenciales incorrectas");
        }
    });
}

// Contacto
if (document.getElementById("contactForm")) {
    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const data = {
            nombre: document.getElementById("nombre").value,
            email: document.getElementById("email").value,
            mensaje: document.getElementById("mensaje").value
        };
        localStorage.setItem("formData", JSON.stringify(data));
        window.location.href = "confirmacion.html";
    });
}

// Newsletter
if (document.getElementById("newsletterForm")) {
    document.getElementById("newsletterForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const data = {
            nombre: document.getElementById("nombre").value,
            email: document.getElementById("email").value
        };
        localStorage.setItem("formData", JSON.stringify(data));
        window.location.href = "confirmacion.html";
    });
}

// Acceso
if (document.getElementById("accesoForm")) {
    document.getElementById("accesoForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const data = {
            usuario: document.getElementById("usuario").value,
            password: document.getElementById("password").value,
            sesion: document.getElementById("mantenerSesion").checked // Corregido: .checked para checkbox
        };
        localStorage.setItem("formData", JSON.stringify(data));
        window.location.href = "confirmacion.html";
    });
}

// Registro
if (document.getElementById("registroForm")) {
    document.getElementById("registroForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const password = document.getElementById("password").value;
        const repitePassword = document.getElementById("repitePassword").value;
        if (password !== repitePassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
        const data = {
            usuario: document.getElementById("usuario").value,
            email: document.getElementById("email").value,
            nombreCompleto: document.getElementById("nombreCompleto").value
        };
        localStorage.setItem("formData", JSON.stringify(data));
        window.location.href = "confirmacion.html";
    });
}

// Mostrar confirmación
if (document.getElementById("datosConfirmacion")) {
    const data = JSON.parse(localStorage.getItem("formData"));
    if (data) {
        let html = "<ul>";
        for (const key in data) {
            html += `<li><b>${key}</b>: ${data[key]}</li>`;
        }
        html += "</ul>";
        document.getElementById("datosConfirmacion").innerHTML = html;
    }
}