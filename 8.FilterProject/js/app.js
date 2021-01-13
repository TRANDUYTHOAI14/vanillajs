"use strict";
// filter by btn
(function () {
  //find elmeent
  const btnList = document.querySelectorAll(".filter-btn");

  btnList &&
    btnList.forEach((btn) => {
      // handle button when click
      const handleButton = (event) => {
        //current element
        const elementCurrent = event.currentTarget;
        //prevent default a element
        event.preventDefault();
        // get data value of btn
        let dataValue = elementCurrent.dataset.filter;
        console.log(dataValue);

        // find store item
        const itemList = document.querySelectorAll(".store-item");

        // logic
        itemList.forEach((item) => {
          //check data value && classList
          dataValue === "all"
            ? (item.style.display = "block")
            : item.classList.contains(dataValue)
            ? (item.style.display = "block")
            : (item.style.display = "none");
        });
      };

      // add event click
      btn.addEventListener("click", handleButton);
    });
})();
