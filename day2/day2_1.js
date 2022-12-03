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
    hand = item.split(" ")[1];
    if (hand === "X") {
      score += 1;
    } else if (hand === "Y") {
      score += 2;
    } else if (hand === "Z") {
      score += 3;
    }
    if (item === "A Y" || item === "B Z" || item === "C X") {
      score += 6;
    }
    if (item === "A X" || item === "B Y" || item === "C Z") {
      score += 3;
    }
  });
  console.log(score);
});
