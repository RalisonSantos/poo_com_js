
const btn = document.querySelector('.btn');

btn.addEventListener('click',mostrar)

function mostrar(){
    const num = document.querySelector('.numero').value;
    const dolar = num * 3.50;

    return console.log(dolar);
}