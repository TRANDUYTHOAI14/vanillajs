// random Number
const randomNumber = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) return [];
  return Math.trunc(Math.random() * numberList.length);
};
