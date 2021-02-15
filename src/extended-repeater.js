const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = [];

  if (!options.repeatTimes) {
    result.push(str);
  }
  if (!options.additionRepeatTimes) {
    result.push(options.addition);
  }

  for (let i = 1; i <= options.repeatTimes; i++) {
    result.push(String(str));

    for (let j = 1; j <= options.additionRepeatTimes; j++) {
      result.push(String(options.addition));

      if (options.additionRepeatTimes > j) {
        result.push(options.additionSeparator || "|");
      }
    }

    if (options.repeatTimes > i) {
      result.push(options.separator || "+");
    }
  }

  return result.join("");
};
