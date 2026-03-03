
const btn = document.querySelector('.btn');

btn.addEventListener('click',mostrar)

function mostrar(){
    const num = document.querySelector('.numero').value;
    const newNum = Math.pow(num,3);

    return console.log(newNum);
}