"use strict";
(() => {
  const colorList = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#e67e22",
    "#c0392b",
  ];

  const randomNumber = (numberList) => {
    if (!Array.isArray(numberList) || !numberList.length) return [];
    return Math.trunc(Math.random() * numberList.length);
  };

  const showColor = document.querySelector("#color");
  // find element
  const button = document.querySelector("button");

  let colorRandom = JSON.parse(localStorage.getItem("color"));

  if (colorRandom) {
    document.body.style.backgroundColor = colorRandom;
    showColor.innerHTML = colorRandom;
  }

  // add event listener
  if (button) {
    const handleButton = (event) => {
      let random = randomNumber(colorList);

      let colorRandom = colorList[random];

      localStorage.setItem("color", JSON.stringify(colorRandom));

      document.body.style.backgroundColor = colorRandom;

      showColor.innerHTML = colorRandom;
    };

    button.addEventListener("click", handleButton);
  }
})();
