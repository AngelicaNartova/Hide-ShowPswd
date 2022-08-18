const showPasswdBtn = document.querySelector('#show-passwd')
const showPasswdIcon = showPasswdBtn.querySelector('img')
const passwdInput = document.querySelector('#password')

showPasswdBtn.addEventListener('click', () => {
    passwdInput.type = passwdInput.type === 'password' 
    ? 'text' 
    : 'password'

    showPasswdIcon.src = showPasswdIcon.src.includes('open') 
    ? 'eye_closed.svg' 
    : 'eye_open.svg'
})