const btn = document.querySelector(".btn");

btn.addEventListener("click", mostrar);

function mostrar() {
  const num1 = document.querySelector(".numero1").value;
  const newNum1 = parseFloat(num1);
  const num2 = document.querySelector(".numero2").value;
  const newNum2 = parseFloat(num2);

  const soma = newNum1 + newNum2;

  return console.log(soma);
}
