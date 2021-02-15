const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  const result = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next") {
      i == arr.length - 1 ? i : (result[i + 1] = "del");
    } else if (arr[i] == "--discard-prev") {
      i == 0 ? i : (result[i - 1] = "del");
    } else if (arr[i] == "--double-next") {
      i == arr.length - 1 || result[i + 1] == "del"
        ? i
        : (result[i] = arr[i + 1]);
    } else if (arr[i] == "--double-prev") {
      i == 0 || result[i - 1] == "del" ? i : (result[i] = arr[i - 1]);
    }
  }

  return result.filter((item) => {
    if (
      item == "--discard-next" ||
      item == "--discard-prev" ||
      item == "--double-next" ||
      item == "--double-prev" ||
      item == "del"
    ) {
      return false;
    }
    return true;
  });
};
