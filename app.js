const body = document.getElementsByTagName('body')[0];
const container = document.querySelector('.container');
const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', () => {
    body.style.backgroundColor = 'blue';
    container.style.backgroundColor = 'red';
})