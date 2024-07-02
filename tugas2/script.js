document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === 'rendra' && password === 'rendra123') {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; 
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});
