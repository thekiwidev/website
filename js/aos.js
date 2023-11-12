const header = document.querySelector(".main-header");

document.addEventListener("scroll", () => {
  scrollY >= screen.height - 200
    ? header.classList.add("fixed")
    : header.classList.remove("fixed");
});
