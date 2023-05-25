const likeButtons = document.querySelectorAll(".like_btn");
const closeButtons = document.querySelectorAll(".close_btn");
const readButtons = document.querySelectorAll(".read_btn");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// like button function
likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("liked");

    if (button.classList.contains("liked")) {
      button.innerHTML = '<i class="fa-solid fa-heart"></i>';
    } else {
      button.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
  });
});

// delete news function
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    card.remove();
  });
});

// read news function
readButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const cardImage = card.querySelector(".card__image");
    const cardTitle = card.querySelector(".card__title");

    if (button.classList.contains("active")) {
      button.classList.remove("active");
      button.style.color = "";
      cardImage.style.gridColumn = "";
      cardImage.style.gridRow = "";
      cardTitle.style.color = "";
    } else {
      button.classList.add("active");
      cardImage.style.gridColumn = "1/3";
      cardImage.style.gridRow = "1/2";
      button.style.color = "#0266FF";
      cardTitle.style.color = "#0266FF";
    }
  });
});

//Hamburger menu click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
