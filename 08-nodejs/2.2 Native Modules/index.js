const fs = require("fs");




fs.readFile("msg.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
fs.writeFile("msg.txt", "ankush", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});