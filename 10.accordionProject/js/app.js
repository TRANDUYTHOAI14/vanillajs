"use strict";
(function () {
  // find element
  const btnList = document.querySelectorAll(".accordion-btn");
  const contentList = document.querySelectorAll(".accordion-content");

  // add event button
  btnList.forEach((btn) => {
    const handleButton = (event) => {
      // current element
      const eventCurrent = event.target;
      // next content element
      const nextElement = eventCurrent.nextElementSibling;

      // hide all content
      contentList.forEach((content) => {
        content.style.display = "none";
      });

      // show this content when click
      nextElement.style.display = "block";

      // remove all class active
      btnList.forEach((btn) => {
        btn.classList.remove("active");
      });

      // add class active this btn
      eventCurrent.classList.add("active");
    };
    // add event
    btn.addEventListener("click", handleButton);
  });
  // logic
})();
