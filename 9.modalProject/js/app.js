"use strict";
(function () {
  let imgList = [];
  let count = 0;
  // find element
  const imgElements = document.querySelectorAll(".img-item");
  const modalElement = document.querySelector(".modals");
  const modalContent = modalElement.querySelector(".modal-content");
  const closeElement = modalElement.querySelector(".close-btn");
  const btnList = modalElement.querySelectorAll(".btn");

  // save img src to list
  imgElements &&
    imgElements.forEach((img) => {
      //get src save to img list
      imgList.push(img.src);
      img.addEventListener("click", function (event) {
        // show modal
        modalElement.style.display = "flex";
        // when click img - change background image
        let srcCurrent = event.currentTarget.src;
        console.log(srcCurrent);
        modalContent.style.backgroundImage = `url(${srcCurrent})`;
      });
    });

  // hide modal
  closeElement.addEventListener("click", function () {
    modalElement.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    const elementCurrent = e.target;
    if (elementCurrent === modalElement) modalElement.style.display = "none";
  });

  btnList &&
    btnList.forEach((btn) => {
      // add event
      btn.addEventListener("click", (e) => {
        let btnCurrent = e.currentTarget;

        if (btnCurrent.classList.contains("prev")) {
          count--;
          if (count < 0) count = imgList.length - 1;
        } else {
          count++;
          if (count > imgList.length - 1) count = 0;
        }

        modalContent.style.backgroundImage = `url(${imgList[count]})`;
      });
    });
})();
