"use strict";
(function () {
  //get element
  const button = document.querySelector("button");
  const body = document.body;

  // check reload page
  let state = localStorage.getItem("state");

  if (state === "enable") {
    body.classList.add("darkmode");
  }

  // enable darkmode
  const enableDarkmode = () => {
    // Lưu biến trạng thái trên API
    localStorage.setItem("state", "enable");
    // doi mau body
    body.classList.add("darkmode");
  };

  // disable darkmode
  const disableDarkmode = () => {
    // xoa trạng thái trên API
    localStorage.setItem("state", null);
    // doi mau nguoc lai
    body.classList.remove("darkmode");
  };

  // add event
  if (button) {
    button.addEventListener("click", function (e) {
      // get state trạng thái hiện tại
      let state = localStorage.getItem("state");

      if (state !== "enable") {
        enableDarkmode();
      } else {
        disableDarkmode();
      }
    });
  }
})();
