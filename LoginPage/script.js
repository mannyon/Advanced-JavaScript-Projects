
document.querySelector('#login-btn').addEventListener('click', function () {
    document.querySelector('.login-page').style.animation = 'grow 0.5s forwards';
    document.querySelector('.login-page').style.display = 'block';

    document.querySelector('.register-page').style.animation = '';
    document.querySelector('.register-page').style.display = 'none';
});

document.getElementById('registertypeBtn').addEventListener('click', function () {
    document.querySelector('.register-page').style.animation = 'grow 0.5s forwards';
    document.querySelector('.register-page').style.display = 'block';

    document.querySelector('.login-page').style.display = 'none';
    document.querySelector('.login-page').style.animation = '';
})

document.getElementById('logintypeBtn').addEventListener('click', function () {
    document.querySelector('.login-page').style.animation = 'grow 0.5s forwards';
    document.querySelector('.login-page').style.display = 'block';

    document.querySelector('.register-page').style.animation = '';
    document.querySelector('.register-page').style.display = 'none';
})