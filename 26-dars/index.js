// syntax
// try {
//   console.log(a);
// } catch (error) {
//   console.log("error has occured", error.name, error.message);
// } finally {
//   console.log("this always runs");
// }

//example
// let data = `{"age":30}`;
// try {
//   let user = JSON.parse(data);
//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name");
//   }
//   console.log(user.name);
// } catch (error) {
//   console.log("JSON error:", error.name);
// }

// Error types
//ReferenceError
// let x = 5;
// try {
//   x = y + 1;
// } catch (error) {
//   console.log(error instanceof ReferenceError);
//   console.log(error.name);
//   console.log(error.message);
// }

// SyntaxError
// let a = 5;
// let a = 5;

// try {
//   eval("console.log('hello)");
// } catch (error) {
//   console.log(error instanceof SyntaxError);
//   console.log(error.name);
//   console.log(error.message);
// }

//typeError
// let obj = { name: "Jamshidbek" };
// let res = obj.substring(2, 4);
// console.log(res);

// let num = 5;
// try {
//   console.log(num.toUppercase());
// } catch (error) {
//   console.log(error.name);
// }

// function add(a, b) {
//   return a + b;
// }
// function minus(a, b) {
//   return a - b;
// }
// function multiply(a, b) {
//   return a * b;
// }
// function divide(a, b) {
//   return a / b;
// }
// function calculate(x, y, operation) {
//   return operation(x, y);
// }
// console.log(calculate(10, 2, divide));

// function getTime() {
//   let time = new Date();
//   console.log(
//     time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
//   );
// }
// setInterval(getTime, 1000);

//Promise
// let promise = new Promise((resolve, reject) => {
//   let num = 3;
//   if (num == 3) {
//     resolve("Test passed");
//   } else {
//     reject("Test didn't pass");
//   }
// });
// promise
//   .then((message) => {
//     console.log("This is in the then block", message);
//   })
//   .catch((message) => {
//     console.log("This is in the catch block", message);
//   });

// examples with callback
// let data = [
//   { id: 1, name: "Jamshidbek", age: 19 },
//   { id: 2, name: "Bekzodbek", age: 20 },
//   { id: 3, name: "Asadbek", age: 21 },
// ];

// const render = () => {
//   setTimeout(() => {
//     data.forEach((user) => {
//       console.log(`${user.id}. ${user.name} ${user.age}`);
//     });
//   }, 1000);
// };
// render();

// const deletedUser = (id) => {
//   let res = data.filter((user) => {
//     return user.id !== id;
//   });
//   data = res;
// };
// deletedUser(1);

// const deleteData = (id, callback) => {
//   let res = data.filter((user) => {
//     return user.id !== id;
//   });
//   data = res;
//   callback();
// };
// deleteData(1, render);

// const addUser = (user, callback) => {
//   setTimeout(() => {
//     data = [...data, user];
//     console.log("---------");
//     callback();
//   }, 3000);
// };
// addUser({ id: data.length + 1, name: "Eshmat", age: 25 }, render);

// Promise
let data = [
  { id: 1, name: "Jamshidbek", age: 19 },
  { id: 2, name: "Bekzodbek", age: 20 },
  { id: 3, name: "Asadbek", age: 21 },
];

const render = () => {
  setTimeout(() => {
    data.forEach((user) => {
      console.log(`${user.id}. ${user.name} ${user.age}`);
    });
  }, 1000);
};
render();

// function deleteUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let res = data.filter((user) => user.id !== id);
//       data = res;
//       console.log("------------------");
//       let error = true;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Xatolik bor");
//       }
//     }, 3000);
//   });
// }
// deleteUser(1)
//   .then(render)
//   .catch((error) => console.log(error));

// function addUser(newuser) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data = [...data, newuser];
//       console.log("---------");
//       let error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Xatolik bor");
//       }
//     }, 3000);
//   });
// }
// addUser({ id: data.length + 1, name: "Eshmat", age: 25 })
//   .then(render)
//   .catch((error) => console.log(error));

