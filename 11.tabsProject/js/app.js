"use strict";

(function () {
  const btnList = document.querySelectorAll(".btn");
  const tabContent = document.querySelectorAll(".tab-content__item");
  btnList &&
    btnList.forEach((btn) => {
      //handle button function
      const handleButton = (event) => {
        // current element
        const btnCurrent = event.currentTarget;
        // preven default
        event.preventDefault();

        // remove all class active
        btnList.forEach((btn) => {
          btn.classList.remove("actives");
        });
        // add class active this btn
        btnCurrent.classList.add("actives");

        // get dataset this btn
        let dataElement = btnCurrent.dataset.type;

        // hide all tab content
        tabContent.forEach((content) => {
          content.style.display = "none";

          // show this tab content
          if (content.classList.contains(dataElement)) {
            content.style.display = "block";
          }
        });
      };
      // add even to btn
      btn.addEventListener("click", handleButton);
    });

  // active content choose
  btnList &&
    btnList.forEach((btn) => {
      if (btn.classList.contains("actives")) {
        let dataType = btn.getAttribute("data-type");
        tabContent.forEach((content) => {
          if (content.classList.contains(dataType))
            content.style.display = "block";
        });
      }
    });
})();
