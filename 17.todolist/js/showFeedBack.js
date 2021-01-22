const showFeedBack = (element) => {
  //
  if (!element) return;

  // show hide feedback
  element.style.display = "block";
  setTimeout(() => {
    element.style.display = "none";
  }, 1000);
};

export default showFeedBack;
