// immediate invoked function expression

(function () {
  const pictureList = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4",
  ];

  // find element
  const btnList = document.querySelectorAll(".btn");
  const imgElement = document.querySelector(".img-container");

  // init counter
  let counter = 0;

  if (btnList) {
    // create function handle btn
    const handleBtn = (e) => {
      // current elmeent
      const currentElement = e.currentTarget;
      // console.log(currentElement);
      // btn prev handle
      if (currentElement.classList.contains("btn-left")) {
        counter--;
        console.log(counter);
        // if count negative ==> undefined - get last element picture
        if (counter < 0) counter = pictureList.length - 1;
      }

      // btn next handle
      if (currentElement.classList.contains("btn-right")) {
        counter++;
        if (counter > pictureList.length - 1) counter = 0;
        console.log(counter);
      }
      // change background img container
      imgElement.style.backgroundImage = `url(img/${pictureList[counter]}.jpeg)`;
    };
    // add event to each btn
    btnList.forEach((btn) => {
      btn.addEventListener("click", handleBtn);
    });
  }
})();
