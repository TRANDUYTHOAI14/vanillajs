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
  // find element
  const button = document.querySelector("button");
  // add event listener
  if (button) {
    const handleButton = (event) => {
      let random = randomNumber(colorList);
      document.body.style.backgroundColor = colorList[random];
    };
    button.addEventListener("click", handleButton);
  }
})();
