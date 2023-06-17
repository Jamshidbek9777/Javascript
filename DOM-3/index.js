//MouseEvents
//onclick
//ondoubleclick
//onmouseover
// const clik = (event) => {
//   console.log(event);
// };
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   alert("clicked");
// });

//Bubling
let parent = document.querySelector("#parent");
let child = document.querySelector("#child");
let grandchild = document.querySelector("#grandchild");

parent.addEventListener("click", () => {
  console.log("parent");
});
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("child");
});
grandchild.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("grandchild");
});
