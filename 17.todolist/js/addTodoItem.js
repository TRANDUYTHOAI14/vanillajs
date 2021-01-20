const addTodoItem = (formvalue, parent) => {
  const div = document.createElement("div");
  div.classList.add("todo-item");
  const divContent = `
  <h5 class="todo-item__content">${formvalue}</h5>
  <div class="todo-item__button">
    <a href="#" class="complete"
      ><i class="fa fa-check-circle" aria-hidden="true"></i
    ></a>
    <a href="#" class="edit"><i class="fas fa-edit"></i></a>
    <a href="#" class="delete"
      ><i class="fa fa-times-circle" aria-hidden="true"></i
    ></a>
  </div>
  `;
  div.innerHTML = divContent;

  parent.append(div);
};

export default addTodoItem;
