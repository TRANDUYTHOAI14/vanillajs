"use strict";
import getFormValue from "./getFormValue.js";
import validateForm from "./validateForm.js";
import showFeedBack from "./showFeedBack.js";
import addTodoItem from "./addTodoItem.js";

(function () {
  // get elements
  const form = document.querySelector("#form-todo");
  const inputElement = form.querySelector("#valueInput");
  const todoList = document.querySelector(".todo-list");

  // save storage
  let formValueList = JSON.parse(localStorage.getItem("FormValue")) || [];

  // ---------- HANDLE BUTTON ------------
  const handleButton = (inputValue) => {
    // get to do item
    const todoItemList = document.querySelectorAll(".todo-item");
    //
    todoItemList.forEach((item) => {
      const contentElement = item.querySelector(".todo-item__content");
      const content = contentElement.innerHTML;
      const completeBtn = item.querySelector(".complete");
      const editBtn = item.querySelector(".edit");
      const deleteBtn = item.querySelector(".delete");
      // check if to do content of item === value input asign event
      if (content === inputValue) {
        // COMPLETE BUTTON
        completeBtn.addEventListener("click", function (e) {
          contentElement.classList.toggle("complete-todo");
          this.classList.toggle("opacity");
          console.log(this);
        });

        // EDIT BUTTON
        editBtn.addEventListener("click", function (e) {
          // remove value list
          formValueList = formValueList.filter((x) => x !== content);
          localStorage.setItem("FormValue", JSON.stringify(formValueList));

          // remove UI - add lai input
          todoList.removeChild(item);

          // repass value input element
          inputElement.value = content;

          console.log(formValueList);
        });

        // DELETE BUTTON
        deleteBtn.addEventListener("click", function (e) {
          // remove UI - add lai input
          todoList.removeChild(item);

          // remove value list
          formValueList = formValueList.filter((x) => x !== content);
          localStorage.setItem("FormValue", JSON.stringify(formValueList));

          // show feedback
          const deleteElement = document.querySelector(".delete-success");

          showFeedBack(deleteElement);
        });
      }
    });
  };

  // --------- HANDLE FORM --------
  const handleForm = (e) => {
    // form current
    const formCurrent = e.target;

    // prevent default
    e.preventDefault();

    // GET VALUE FORM
    let formValue = getFormValue(formCurrent);

    // VALIDATE FORM VALUE AND SAVE TO LIST
    let isValid = validateForm(formValue);
    if (!isValid) {
      const fail = document.querySelector(".fail");
      showFeedBack(fail);
      return;
    }

    // show feed back
    const success = document.querySelector(".success");
    showFeedBack(success);
    formValueList.push(formValue);

    // save to local storage
    localStorage.setItem("FormValue", JSON.stringify(formValueList));

    // add item
    addTodoItem(formValue, todoList);

    // handle button
    handleButton(formValue);

    // reset form
    formCurrent.reset();
  };

  // CLEAR ALL ITEM
  const clearBtn = document.querySelector(".btn-clear");
  clearBtn.addEventListener("click", function (e) {
    //
    const todoItemList = document.querySelectorAll(".todo-item");
    todoItemList.forEach((item) => {
      todoList.removeChild(item);
      formValueList = [];
      localStorage.removeItem("FormValue");
    });
  });

  console.log(formValueList);

  // add event submit to form
  if (form) {
    form.addEventListener("submit", handleForm);
  }

  // render if localstorage have value
  if (formValueList.length > 0) {
    formValueList.forEach((item) => {
      addTodoItem(item, todoList);
      handleButton(item);
    });
  }
})();
