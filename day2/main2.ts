import fs from "fs";

// Day 2 Part 2

let largestRed = 0;
let largestBlue = 0;
let largestGreen = 0;

let sum = 0;

fs.readFile("cubesData.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const lines = data.split(/\r?\n/);
  for (let line of lines) {
    const a = games(line);
  }
});

function games(line: string) {
  const id = line.split(":")[0].split(" ")[1];
  const sets = line.split(";");
  largestRed = 0;
  largestBlue = 0;
  largestGreen = 0;

  // remove the id from the first set
  sets[0] = sets[0].split(":")[1];

  for (let i = 0; i < sets.length; i++) {
    let singleSet = sets[i].split(",");
    handleSet(singleSet);
  }
  sumOfAll();
  console.log(sum);
  //console.log(largestRed, largestBlue, largestGreen);
}

function handleSet(set: string[]) {
  for (let i = 0; i < set.length; i++) {
    let colors = set[i].split(" ");
    // remove the first empty element
    const cleanSetArr = colors.filter((el, idx) => idx > 0);
    //console.log(cleanSetArr);

    if (cleanSetArr[1] === "red") {
      if (Number(cleanSetArr[0]) > largestRed) {
        largestRed = Number(cleanSetArr[0]);
      }
    } else if (cleanSetArr[1] === "blue") {
      if (Number(cleanSetArr[0]) > largestBlue) {
        largestBlue = Number(cleanSetArr[0]);
      }
    } else if (cleanSetArr[1] === "green") {
      if (Number(cleanSetArr[0]) > largestGreen) {
        largestGreen = Number(cleanSetArr[0]);
      }
    }
  }
  return { largestRed, largestBlue, largestGreen };
}

function sumOfAll() {
  let multiplication = largestRed * largestBlue * largestGreen;
  sum += multiplication;
  return sum;
}
