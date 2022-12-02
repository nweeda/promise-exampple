//promises
//commit to something (ie i promise to...), then 2 results (completed -> resolved, or failed -> rejected

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
