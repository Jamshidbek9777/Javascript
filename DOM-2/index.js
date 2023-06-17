import users from "./mock.js";

//Creating element
// const box = document.createElement("div");
// box.innerHTML = "<a href='#'>Link</>";
//Inserting
// const container = document.querySelector("#container");
// container.append(box);
// container.prepend(box);

//Cloning
// const cloneContainer = container.cloneNode(true);
// console.log(cloneContainer);

//Styling
// container.style.background = "lightblue";
// container.style.borderRadius = "10px";

//Geometry
// console.log(container.offsetWidth);
// console.log(container.clientWidth);
// console.log(container.offsetHeight);
// console.log(container.clientHeight);

//Scrolling
// const button = document.querySelector("#scroll");
// button.onclick = () => {
//   container.scrollBy({
//     behavior: "smooth",
//     top: 50,
//   });
// };

//Practise Show more | Show less
// const button = document.querySelector("#scroll");
// const initialHeight = container.clientHeight;
// button.onclick = () => {
//   if (container.clientHeight !== container.scrollHeight) {
//     button.innerText = "Show less";
//     container.style.height = `${container.scrollHeight}px`;
//   } else {
//     container.style.height = `${initialHeight}px`;
//     button.innerText = "Show more";
//   }
// };
//====================================================

//CRUD

console.log(users);
