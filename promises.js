//promises
//commit to something (ie i promise to...), then 2 results (completed -> resolved, or failed -> rejected
console.log("hi");
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

//if resolved -> then, catch -> rejected
p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});
