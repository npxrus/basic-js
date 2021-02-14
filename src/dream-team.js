const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const dreamTeam = [];

  for (let member of members) {
    if (typeof member === "string") {
      dreamTeam.push(member.trimStart().slice(0, 1).toUpperCase());
    }
  }

  return dreamTeam.sort().join("");
};
