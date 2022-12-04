const { groupCollapsed } = require("console");
const fs = require("fs");

fs.readFile("./day3.txt", "utf8", (err, data) => {
  data = data.split("\r\n");
  let letters = "";

  for (let i = 0; i <= data.length; i = i + 3) {
    let groups = [];
    if (data[i] !== undefined && data[i]) {
      groups.push(data[i]);
      groups.push(data[i + 1]);
      groups.push(data[i + 2]);
    }
    groups.sort((a, b) => {
      if (a.length > b.length) return -1;
      if (a.length == b.length) return 0;
      if (a.length < b.length) return 1;
    });
    first = groups[0];
    second = groups[1];
    third = groups[2];
    if (groups.length > 0) {
      for (let j = 0; j <= first.length; j++) {
        for (let g = 0; g <= second.length; g++) {
          if (first.charAt(j) === second.charAt(g)) {
            if (third.includes(first.charAt(j))) {
              if(first.charAt(j) === '') {
                letters = letters.concat(' ')
              } else {
                letters = letters.concat(first.charAt(j));
              }
            }
          }
        }
      }
    }
  }
  letters = letters.split(" ");
  const alphaUpp = Array.from(Array(26)).map((e, i) => i + 65);
  const alpha = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabetUpp = alphaUpp.map((x) => String.fromCharCode(x));
  const alphabetL = alpha.map((x) => String.fromCharCode(x));
  const alphabet = alphabetL.concat(alphabetUpp);

  let sum = 0;
  letters.forEach((letter) => {
    for (let i = 0; i <= alphabet.length; i++) {
      if (letter.charAt(0) === alphabet[i]) {
        sum += i + 1;
        break;
      }
    }
  });
  console.log(sum);
});
