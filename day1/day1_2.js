const fs = require("fs");

fs.readFile("./day1.txt", "utf8", (err, data) => {
  data = data.split("\r\n").map(Number);
  sumArr = [];
  sum = 0;
  data.forEach((item) => {
    if (item !== 0) {
      sum += item;
    } else {
      sumArr.push(sum);
      sum = 0;
    }
  });
  sumArr.sort(function(a, b){return b-a});
  sum = 0;
  for(let i = 0; i <= 2; i++) {
    sum += sumArr[i];
  }
  console.log(sumArr)
  console.log(sum);
});
