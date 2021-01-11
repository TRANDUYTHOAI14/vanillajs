"use strict";
(() => {
  const quoteList = [
    {
      avatar: "https://randomuser.me/api/portraits/women/40.jpg",
      content: "Lorem ipsum dolor sit amet consectetur 1.",
      name: "Serenity Carlson",
    },

    {
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: "Lorem ipsum dolor sit amet consectetur 2.",
      name: "Gabe Carr",
    },

    {
      avatar: "https://randomuser.me/api/portraits/women/14.jpg",
      content: "Lorem ipsum dolor sit amet consectetur 3.",
      name: "Paul Craig",
    },

    {
      avatar: "https://randomuser.me/api/portraits/men/59.jpg",
      content: "Lorem ipsum dolor sit amet consectetur 4.",
      name: "pimpin",
    },

    {
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      content: "Lorem ipsum dolor sit amet consectetur 5.",
      name: "Gabe Carr tr",
    },
  ];

  const colorList = ["red", "blue", "green", "deeppink", "yellow"];

  const button = document.querySelector("button");
  const card = document.querySelector(".card");
  const img = card.querySelector(".card-img-top");
  const name = card.querySelector(".card-title");
  const content = card.querySelector(".card-text");

  const randomNumber = (arrList) => {
    if (!Array.isArray(arrList) || !arrList.length) return [];
    return Math.floor(Math.random() * arrList.length);
  };

  if (button) {
    const handleButton = (event) => {
      //
      // get random number
      let random = randomNumber(quoteList);
      let randomColor = colorList[randomNumber(colorList)];
      // get random element
      let randomElement = quoteList[random];
      console.log(randomElement);
      // render
      img.src = randomElement.avatar;
      name.innerHTML = randomElement.name;
      content.innerHTML = randomElement.content;
      // change background color card
      document.body.style.backgroundColor = randomColor;
    };
    button.addEventListener("click", handleButton);
  }
})();
