// ---------- HANDLE BUTTON ------------
const handleButton = (inputValue, formValueList) => {
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

export default handleButton;
