const images = document.querySelectorAll(".image");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const nextFunction = (e) => {
  for (i = 0; i <= images.length; i++) {
    if (images[i].getAttribute("class").includes("active")) {
      if (i == images.length - 1) {
        images[i].classList.remove("active");
        images[0].classList.add("active");
      } else {
        images[i].classList.remove("active");
        images[i + 1].classList.add("active");
      }
      break;
    }
  }
};
const prevFunction = (e) => {
  for (i = 0; i <= images.length; i++) {
    if (images[i].getAttribute("class").includes("active")) {
      if (i == 0) {
        images[i].classList.remove("active");
        images[images.length - 1].classList.add("active");
      } else {
        images[i].classList.remove("active");
        images[i - 1].classList.add("active");
      }
      break;
    }
  }
};


next.addEventListener("click", nextFunction);
prev.addEventListener("click", prevFunction);
