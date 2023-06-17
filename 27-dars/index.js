const getReverse = (str) => {
  let res = str.split("");
  let str1 = res.reverse();
  let str2 = str1.join("");
  return str2;
};
console.log(getReverse("1234"));
