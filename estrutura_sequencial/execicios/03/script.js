
const btn = document.querySelector('.btn');

btn.addEventListener('click',mostrar)

function mostrar(){
    const num = document.querySelector('.numero').value;
    const newNum = parseFloat(num);

    return console.log(newNum);
}