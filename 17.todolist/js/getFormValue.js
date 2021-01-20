const getFormValue = (form) => {
  // validate
  if (!form) return;
  let formValue;
  // get value input
  const inputElement = form.querySelector("#valueInput");
  if (inputElement) {
    formValue = inputElement.value;
  }

  // return output
  return formValue;
};

export default getFormValue;
