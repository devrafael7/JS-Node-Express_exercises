const loginForm = document.querySelector('.loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let inputName = loginForm.querySelector('.inputName').value;
    let inputPassword = loginForm.querySelector('.inputPassword').value;

    window.location.href = '/';
});








