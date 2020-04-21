const name = document.querySelector("#name");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const error = document.querySelector("#error");

form.addEventListener('submit', function(e) {
    let messages = [];
    if (name.value === '' || name.value == null) {
        messages.push('You must enter your name!')
    };

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters');
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters');
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (messages.length > 0) {
        e.preventDefault();
        error.innerText = messages.join(', ');
    };
});