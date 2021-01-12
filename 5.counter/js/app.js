"use strict";
(function () {
  // Find ELement
  const number = document.querySelector("#show-number");
  const btnList = document.querySelectorAll(".btn");

  // init count
  let count = 0;

  if (btnList) {
    const handleButton = (event) => {
      const currentElement = event.currentTarget;
      // create count variable
      // check class
      if (currentElement.classList.contains("decrease")) {
        count++;
        number.style.color = "red";
      } else if (currentElement.classList.contains("increase")) {
        count--;
        number.style.color = "green";
      } else {
        count = 0;
        number.style.color = "black";
      }
      number.innerHTML = count;
    };

    // add event for button
    btnList.forEach((btn) => {
      btn.addEventListener("click", handleButton);
    });
  }
})();
