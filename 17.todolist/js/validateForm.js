const validateForm = (formvalue) => {
  let isValid = true;
  // empty value
  if (!formvalue) isValid = false;
  // 2 word
  if (formvalue.split(" ").filter((item) => !!item).length < 2) isValid = false;
  //
  return isValid;
};

export default validateForm;
