const {
  sort: { insertion }
} = require("../lib/index");

const length = 1000;
const data = Array.from({ length }, () =>
  Math.floor(Math.random() * (length - 0) + 0)
);
const ordenedData = insertion(data);

console.log("Orderned data");
console.table(ordenedData.values);
console.log("----------------------");
console.log("Time of operation: ", ordenedData.time);
