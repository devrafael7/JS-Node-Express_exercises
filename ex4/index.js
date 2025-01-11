import { getLoginData } from './public/js/login.js';

const loginForm = document.querySelector('.loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const loginData = getLoginData(); // Pega os dados atualizados
        console.log('Login Data after Submit:', loginData);

        // Use os dados aqui
        // Por exemplo, enviar para um servidor ou exibir na interface
    });
}
