const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  const cat = "^^";
  let cats = 0;

  for (let item of backyard) {
    item.forEach((el) => (el === cat ? cats++ : cats));
  }

  return cats;
};
