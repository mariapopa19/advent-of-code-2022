const fs = require("fs");

fs.readFile("./day1.txt", "utf8", (err, data) => {
  data = data.split("\r\n").map(Number);
  sumArr = [];
  sum = 0;
  max = 0;
  data.forEach((item) => {
    if (item !== 0) {
      sum += item;
    } else {
      sumArr.push(sum);
      if (sum >= max){
        max = sum
      }
      sum = 0;
    }
  });
  console.log(max);
  console.log(Math.max(...sumArr));
});
