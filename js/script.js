let calcBtn = document.querySelector("button");
calcBtn.onclick = function calcImc() {
  let pesoValue = document.querySelector("#peso").value,
    alturaValue = document.querySelector("#altura").value,
    imcValue = document.querySelector(".imcValue");
  formImc = pesoValue / alturaValue ** 2;

  if (alturaValue == "" && pesoValue == "") {
    alert("É necessário informar seu peso e sua altura para calcular seu IMC!");
  } else if (alturaValue == "") {
    alert("É necessário informar sua altura para calcular o seu IMC!");
  } else if (pesoValue == "") {
    alert("É necessário informar seu peso para calcular o seu IMC!");
  } else {
    imcValue.innerHTML = `${formImc.toFixed(2)}`;
  }
};

let resetBtn = document.querySelector("button#reset");
resetBtn.onclick = function resetValue() {
  let pesoValue = document.querySelector("#peso").value,
    alturaValue = document.querySelector("#altura").value,
    imcValue = document.querySelector(".imcValue");

  pesoValue = document.querySelector("#peso").value = "";
  alturaValue = document.querySelector("#altura").value = "";
  imcValue.innerHTML = "";
};