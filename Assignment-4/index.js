let users = {}; // This will store user credentials for demo purposes

function toggleForms() {
    const loginBox = document.getElementById('login-box');
    const signupBox = document.getElementById('signup-box');
    
    if (loginBox.style.display === 'none') {
        loginBox.style.display = 'block';
        signupBox.style.display = 'none';
    } else {
        loginBox.style.display = 'none';
        signupBox.style.display = 'block';
    }
}

function login() {
    const phone = document.getElementById('login-phone').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('login-message');

    if (users[phone] && users[phone] === password) {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Invalid phone number or password.';
        message.style.color = 'red';
    }
}

function signup() {
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;
    const message = document.getElementById('signup-message');

    if (users[phone]) {
        message.textContent = 'Phone number already registered.';
        message.style.color = 'red';
    } else {
        users[phone] = password; // Store the user credentials
        message.textContent = 'Signup successful! You can now log in.';
        message.style.color = 'green';
        toggleForms(); // Switch to login form after successful signup
    }
}
