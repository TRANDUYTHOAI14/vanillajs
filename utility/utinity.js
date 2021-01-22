// random Number
const randomNumber = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) return [];
  return Math.trunc(Math.random() * numberList.length);
};

// Filter array must not number
let notNumber = formValues.todoItem.split(" ").filter((x) => x > 0).length > 0;
