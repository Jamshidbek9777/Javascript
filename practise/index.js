//IMPORTING
import mockData from "./mock.js";
let data = mockData;
const body = document.querySelector("#body");
const list = document.createElement("div");
//DELETING
const displayData = (data) => {
  list.innerHTML = "";
  data.map((user) => {
    const userElement = document.createElement("h3");
    const onDelete = (data, id) => {
      let result = [];
      result = data.filter((user) => {
        return user.id !== id;
      });
      data = result;
      displayData(data);
    };
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.onclick = () => onDelete(data, user.id);
    userElement.innerText = `${user.id}. ${user.name} `;
    userElement.append(button);
    list.append(userElement);
  });
};
displayData(data);
body.append(list);

//SORTING
const sort = (data) => {
  let res = [];
  res = data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  displayData(res);
};
const sortedButton = document.querySelector("#sort");
sortedButton.onclick = () => sort(data);

//SEARCHING
const searchInput = document.querySelector("#searchInput");
searchInput.oninput = ({ target: { value } }) => {
  value = value.toLowerCase();
  let res = [];
  res = data.filter((user) => {
    return user.name.toLowerCase().includes(value);
  });
  displayData(res);
};

//ADDUSER
const addButton = document.querySelector("#addButton");
const addInput = document.querySelector("#addInput");
let newName = "";
addInput.oninput = ({ target: { value } }) => {
  newName = value;
};

const addUser = () => {
  data = [...data, { id: data.length + 1, name: newName }];
  displayData(data);
  addInput.value = "";
};
addButton.onclick = () => addUser();
