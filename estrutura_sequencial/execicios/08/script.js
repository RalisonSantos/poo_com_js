const btn = document.querySelector(".btn");

btn.addEventListener("click", mostrar);

function mostrar() {
  const slr = document.querySelector(".salario").value;
  const slrCon = parseFloat(slr);
  const slrUp = slrCon + ((15 / 100) * slrCon);

  return console.log(slrUp);
}
