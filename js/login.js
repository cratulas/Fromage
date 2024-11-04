
// Usuarios predefinidos
const defaultUsers = [
    { email: "usuario@example.com", password: "usuario123", role: "usuario" },
    { email: "admin@example.com", password: "admin123", role: "admin" }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const selectedRole = document.getElementById("role").value;

    // Obtener usuarios de localStorage y combinar con usuarios predefinidos
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const allUsers = [...defaultUsers, ...storedUsers];

    // Buscar el usuario en el arreglo combinado de usuarios
    const user = allUsers.find(u => u.email === email && u.password === password);

    if (user) {
        if (user.role === selectedRole) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userRole", user.role);
            localStorage.setItem("userEmail", user.email);

            alert(`¡Bienvenido! Has iniciado sesión como ${user.role}.`);
            window.location.href = "index.html";
        } else {
            alert("Error: El rol seleccionado no coincide con el rol de este usuario.");
        }
    } else {
        alert("Correo electrónico o contraseña incorrectos. Intenta de nuevo.");
    }
});
