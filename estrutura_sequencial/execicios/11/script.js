const btn = document.querySelector(".btn");

btn.addEventListener("click", mostrar);

function mostrar() {
  const num = document.querySelector(".numero").value;
  const newNum = parseFloat(num);

  const ferr = newNum * 4

  return console.log(ferr);
}
