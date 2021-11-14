//first code

const number = 9;

if (number < 10) {
  console.log("small number");
} else {
  console.log("large number");
}

console.log(`my first node prog`);

//global varables

console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(process);

// modules

const { john, peter } = require("./Variables");
const sayHi = require("./Utils");

sayHi("Susan");
sayHi(john);
sayHi(peter);

//os module

const os = require("os");
const user = os.userInfo();
console.log(user);
console.log(`The system uptime in seconds ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);

//path module

const path = require("path");

console.log(path.sep);

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

//fs module sync

const { readFileSync, writeFileSync } = require("fs");

console.log('start')
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`
);
console.log("done with this task")
console.log("starting next task")

//fs module async

const { readFile, writeFile } = require("fs");

console.log('start')
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task")
      }
    );
  });
});
console.log("starting next task")

//http module

const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log(req)
//     res.write('Welcome to the homepage')
//     res.end()
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `);
  }
});

server.listen(5000);