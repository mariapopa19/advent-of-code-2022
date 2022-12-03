const fs = require("fs");
// A X Rock 1
// B Y Paper 2
// C Z Scissors 3

// wins : A Y, B Z, C X

fs.readFile("./day2.txt", "utf8", (err, data) => {
  data = data.split("\r\n");
  wins = ["A Y", "B Z", "C X"]; // daca este vre-o una de aici se adauga 6
  score = 0;
  data.forEach((item) => {
    opponent = item.split(" ")[0];
    hand = item.split(" ")[1];
    if (hand === "X") {
      if(opponent === 'A') {
        score += 3;
      } else if (opponent === 'B'){
        score += 1;
      } else if (opponent === 'C') {
        score += 2;
      }
    } else if (hand === "Y") {
      if(opponent === 'A') {
        score += 1;
      } else if (opponent === 'B'){
        score += 2;
      } else if (opponent === 'C') {
        score += 3;
      }
      score += 3;
    } else if (hand === "Z") {
      if(opponent === 'A') {
        score += 2;
      } else if (opponent === 'B'){
        score += 3;
      } else if (opponent === 'C') {
        score += 1;
      }
      score += 6;
    }
  });
  console.log(score);
});
