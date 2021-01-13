"use strict";
const testimonialList = [
  {
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Jayden Stanley",
    address: "5524 Frances Ct",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, at?",
  },

  {
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Tran Ronaldo",
    address: "Lorem ipsum dolor sit.",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, at?",
  },

  {
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Huy Stanley",
    address: "Lorem ipsum dolor sit amet.",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, at?",
  },

  {
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Nguyen van Stanley",
    address: "Lorem ipsum dolor sit amet consectetur.",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, at?",
  },

  {
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    name: "Le thi Gigg",
    address: "Lorem, ipsum dolor.",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, at?",
  },

  {
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Do henry",
    address: "5524 Frances Ct",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, at?",
  },
];

(function () {
  // find element
  const btnList = document.querySelectorAll(".btn");
  const img = document.querySelector(".card-img-top");
  const name = document.querySelector(".card-name");
  const add = document.querySelector(".card-add");
  const content = document.querySelector(".card-text");

  // init index
  let index = 0;

  // handle button funciton
  const handleButton = (event) => {
    // element current
    const elementCurrent = event.currentTarget;

    // logic button prev and next
    let testi = testimonialList[index];
    if (elementCurrent.classList.contains("prev")) {
      index--;
      if (index < 0) index = testimonialList.length - 1;
    }

    if (elementCurrent.classList.contains("next")) {
      index++;
      if (index > testimonialList.length - 1) index = 0;
    }

    // render to UI
    img.src = testi.image;
    name.innerHTML = testi.name;
    add.innerHTML = testi.address;
    content.innerHTML = testi.message;
  };

  // add event to event

  btnList &&
    btnList.forEach((btn) => {
      btn.addEventListener("click", handleButton);
    });
})();
