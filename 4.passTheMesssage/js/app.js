"use strict";
(function () {
  // query elements
  const formElement = document.querySelector("#formmessage");
  const message = formElement.querySelector("#message");
  const feedback = formElement.querySelector("#feedback");
  const showElement = document.querySelector("#show");

  if (formElement) {
    const handleForm = (event) => {
      // prevent default form
      event.preventDefault();
      // get value input
      let valueInput = message.value;
      // pass value show element
      showElement.innerHTML = valueInput;
      // clear input when passed
      message.value = "";
      // validate when user not type
      if (!valueInput) {
        feedback.style.display = "block";
      } else {
        feedback.style.display = "none";
      }
    };
    // add event to form message
    formElement.addEventListener("submit", handleForm);
  }
})();
