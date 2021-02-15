const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machineType) {
    this.machineType = machineType;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();

    let letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let arrMessage = message.toUpperCase().split("");
    let arrKey = key.toUpperCase().split("");
    let encryptedResult = [];

    for (let i = 0, j = 0; i < arrMessage.length; i++, j++) {
      if (letters.includes(arrMessage[i])) {
        if (arrKey[j] === undefined) {
          j = 0;
        }

        let sumEcnrypted =
          arrMessage[i].charCodeAt() + arrKey[j].charCodeAt() - 65;

        if (sumEcnrypted > 90) {
          sumEcnrypted -= letters.length;
        }

        let encryptedLetter = String.fromCharCode(sumEcnrypted);
        encryptedResult.push(encryptedLetter);
      } else {
        encryptedResult.push(arrMessage[i]);
        j--;
      }
    }

    if (this.machineType === false) {
      return encryptedResult.reverse().join("");
    } else return encryptedResult.join("");
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error();

    let letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let arrMessage = message.toUpperCase().split("");
    let arrKey = key.toUpperCase().split("");
    let decryptedResult = [];

    for (let i = 0, j = 0; i < arrMessage.length; i++, j++) {
      if (letters.includes(arrMessage[i])) {
        if (arrKey[j] === undefined) {
          j = 0;
        }

        let diffDecrypted =
          arrMessage[i].charCodeAt() - arrKey[j].charCodeAt() + 65;

        if (diffDecrypted < 65) {
          diffDecrypted = diffDecrypted + letters.length;
        }

        let decryptedLetter = String.fromCharCode(diffDecrypted);
        decryptedResult.push(decryptedLetter);
      } else {
        decryptedResult.push(arrMessage[i]);
        j--;
      }
    }

    if (this.machineType === false) {
      return decryptedResult.reverse().join("");
    } else return decryptedResult.join("");
  }
}

module.exports = VigenereCipheringMachine;
