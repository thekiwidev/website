const cursor = document.getElementById("cursor");
const hoverArray = [];
const interactiveArray = [];

const h1s = document.querySelectorAll("h1");
const h2s = document.querySelectorAll("h2");
const h3s = document.querySelectorAll("h3");
const h4s = document.querySelectorAll("h4");
const h5s = document.querySelectorAll("h5");
const h6s = document.querySelectorAll("h6");
const ps = document.querySelectorAll("p");
const links = document.querySelectorAll("a");
const btns = document.querySelectorAll("button");
const bannerImage = document.getElementById("banner-img");
const logo = document.querySelector(".logo");

links.forEach((link) => {
  interactiveArray.push(link);
});
btns.forEach((btn) => {
  interactiveArray.push(btn);
});
h1s.forEach((h1) => {
  hoverArray.push(h1);
});
h2s.forEach((h2) => {
  hoverArray.push(h2);
});
h3s.forEach((h3) => {
  hoverArray.push(h3);
});
h4s.forEach((h4) => {
  hoverArray.push(h4);
});
h5s.forEach((h5) => {
  hoverArray.push(h5);
});
h6s.forEach((h6) => {
  hoverArray.push(h6);
});
ps.forEach((p) => {
  hoverArray.push(p);
});
hoverArray.push(bannerImage);
hoverArray.push(logo);

hoverArray.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("grow");
    console.log(item);
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
  });
});

interactiveArray.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("ripple");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("ripple");
  });
});

document.addEventListener("scroll", () => {
  cursor.setAttribute(
    "style",
    `top: ${e.pageY - 13}px; left:${e.pageX - 13}px; position: fixed;`
  );
});

// if(navigator.userAgent.match())

// /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
if (navigator.userAgent.match(/Android/i)) {
  console.log("Android");
  // document.querySelector("body").style.cursor = "none";
  cursor.style.display = "none";
  console.log(cursor);
} else if (navigator.userAgent.match(/iPhone/i)) {
  console.log("iPhone");
  cursor.style.display = "none";
} else if (navigator.userAgent.match(/iPad/i)) {
  console.log("iPad");
  cursor.style.display = "none";
} else {
  console.log("desktop");
  // document.querySelector("body").style.cursor = "none";

  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      `top: ${e.pageY - 13}px; left:${e.pageX - 13}px;`
    );
  });
}
