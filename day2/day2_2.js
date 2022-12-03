const fs = require("fs");

fs.readFile("./day2.txt", "utf8", (err, data) => {
  data = data.split("\r\n")
    console.log(data);
});
