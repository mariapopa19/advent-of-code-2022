const fs = require("fs");

fs.readFile("./day3.txt", "utf8", (err, data) => {
  data = data.split("\r\n");
  let letters = "";
  data.forEach((item) => {
    let first = item.slice(0, item.length / 2);
    let second = item.slice(item.length / 2);
    // console.log('first ' + first);
    // console.log('second ' + second);
    for (let i = 0; i <= first.length; i++) {
      for (let j = 0; j <= second.length; j++) {
        if (first.charAt(i) === second.charAt(j)) {
          if (first.charAt(i) === "") {
            letters = letters.concat(" ");
          } else {
            letters = letters.concat(first.charAt(i));
          }
        }
      }
    }
  });
  letters = letters.split(" ");
  const alphaUpp = Array.from(Array(26)).map((e, i) => i + 65);
  const alpha = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabetUpp = alphaUpp.map((x) => String.fromCharCode(x));
  const alphabetL = alpha.map((x) => String.fromCharCode(x));
  const alphabet = alphabetL.concat(alphabetUpp)

  let sum = 0;
  letters.forEach((letter) => {
    for(let i = 0; i<= alphabet.length; i++) {
        if(letter.charAt(0) === alphabet[i]){
            sum += i + 1 ;
            break;
        }
    }
  });
  console.log(sum)
});
