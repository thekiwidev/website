document.querySelector("video").playbackRate = 0.5;

const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  nav.classList.toggle("open");

  console.log("clicked");
});

document.addEventListener("click", (e) => {
  console.log(e.target);
});
