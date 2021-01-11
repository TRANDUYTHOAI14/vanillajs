"use strict";

(function () {
  const button = document.querySelector("button");
  const color = document.querySelector("#color");

  const randomNumber = (arr) => {
    if (!Array.isArray(arr) || !arr.length) return [];
    return Math.trunc(Math.random() * arr.length);
  };

  if (button) {
    const handleButton = (event) => {
      // hex character
      const hexList = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ];
      // create random color
      let randomColor = "#";
      // get 6 element
      for (let i = 0; i < 6; i++) {
        let randomItem = hexList[randomNumber(hexList)];
        randomColor += randomItem;
      }
      // change color body elemenet
      document.body.style.backgroundColor = randomColor;
      color.innerHTML = randomColor;
    };
    button.addEventListener("click", handleButton);
  }
})();
