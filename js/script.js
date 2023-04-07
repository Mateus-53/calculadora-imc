let calcBtn = document.querySelector("button");
const colors = {
  font: "#e7f6f2",
  bg: "#395b64",
  chooseBg: "#a5c9ca",
  chooseFont: "#112031",
};
calcBtn.onclick = function calcImc() {
  let pesoValue = document.querySelector("#peso").value,
    alturaValue = document.querySelector("#altura").value,
    imcValue = document.querySelector(".imcValue"),
    calcImc = pesoValue / alturaValue ** 2;

  if (alturaValue == "" && pesoValue == "") {
    alert("É necessário informar: \n > Peso \n > Altura");
  } else if (alturaValue == "") {
    alert("É necessário informar: \n > Altura");
  } else if (pesoValue == "") {
    alert("É necessário informar: \n > Peso");
  } else {
    imcValue.innerHTML = `${calcImc.toFixed(2)}`;
    const tr = document.querySelectorAll(".trClass");
    for (let i = 0; i < tr.length; i++) {
      let chooseTr = {
        tr1: tr[0],
        tr2: tr[1],
        tr3: tr[2],
        tr4: tr[3],
        tr5: tr[4],
        tr6: tr[5],
      };

      if (calcImc <= 18.5) {
        chooseTr.tr1.style.backgroundColor = colors.chooseBg;
        chooseTr.tr1.style.color = colors.chooseFont;
      } else if (calcImc >= 18.6 && calcImc <= 24.9) {
        chooseTr.tr2.style.backgroundColor = colors.chooseBg;
        chooseTr.tr2.style.color = colors.chooseFont;
      } else if (calcImc >= 25 && calcImc <= 29.9) {
        chooseTr.tr3.style.backgroundColor = colors.chooseBg;
        chooseTr.tr3.style.color = colors.chooseFont;
      } else if (calcImc >= 30 && calcImc <= 34.9) {
        chooseTr.tr4.style.backgroundColor = colors.chooseBg;
        chooseTr.tr4.style.color = colors.chooseFont;
      } else if (calcImc >= 35 && calcImc <= 39.9) {
        chooseTr.tr5.style.backgroundColor = colors.chooseBg;
        chooseTr.tr5.style.color = colors.chooseFont;
      } else if (calcImc >= 40) {
        chooseTr.tr6.style.backgroundColor = colors.chooseBg;
        chooseTr.tr6.style.color = colors.chooseFont;
      }
    }
  }
};

let resetBtn = document.querySelector("button#reset");
resetBtn.onclick = function resetValue() {
  let pesoValue = document.querySelector("#peso").value,
    alturaValue = document.querySelector("#altura").value,
    imcValue = document.querySelector(".imcValue");

  const tr = document.querySelectorAll(".trClass");
  for (let i = 0; i < tr.length; i++) {
    let chooseTr = tr[i];
    chooseTr.style.backgroundColor = colors.bg;
    chooseTr.style.color = colors.font;
  }
  pesoValue = document.querySelector("#peso").value = "";
  alturaValue = document.querySelector("#altura").value = "";
  imcValue.innerHTML = "";
};
