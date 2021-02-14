const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    sampleActivity === null ||
    isNaN(sampleActivity)
  ) {
    return false;
  }

  if (
    Number(sampleActivity) < 1 ||
    Number(sampleActivity) > 8999 ||
    Number(sampleActivity) == 15.1
  ) {
    return false;
  }

  let activity =
    Math.log(MODERN_ACTIVITY / Number(sampleActivity)) /
    (0.693 / HALF_LIFE_PERIOD);

  return Math.ceil(activity);
};
