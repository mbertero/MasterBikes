

const $btnSignIn = document.querySelector('.sign-in-btn');
const $btnSignUp = document.querySelector('.sign-up-btn');
const $signUp = document.querySelector('.sign-up');
const $signIn = document.querySelector('.sign-in');
const $formulario = document.querySelector('.formulario');

$btnSignIn.addEventListener('click', () => {
    $signUp.classList.remove('active');
    $signIn.classList.add('active');
    $formulario.classList.add('active');
});





