const showPasswordButton = document.querySelector('#show-password')
const showPasswordIcon = showPasswordButton.querySelector('img')
const passwordInput = document.querySelector('#password')

showPasswordButton.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === 'password' 
    ? 'text' 
    : 'password'

    showPasswordIcon.src = showPasswordIcon.src.includes('open') 
    ? 'eye_closed.svg' 
    : 'eye_open.svg'
})