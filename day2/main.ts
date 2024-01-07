import fs from "fs";

// Day 2 Part 1

let redSum = 0;
let blueSum = 0;
let greenSum = 0;

let idSum = 0;

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

  // remove the id from the first set
  sets[0] = sets[0].split(":")[1];

  for (let i = 0; i < sets.length; i++) {
    let singleSet = sets[i].split(",");
    const ifPossible = handleSet(singleSet);
    if (!ifPossible) {
      return 0;
    }
  }
  idSum += Number(id);
  console.log(idSum);
  return idSum;
}

function handleSet(set: string[]) {
  redSum = 0;
  blueSum = 0;
  greenSum = 0;
  for (let i = 0; i < set.length; i++) {
    let colors = set[i].split(" ");
    // remove the first empty element
    const cleanSetArr = colors.filter((el, idx) => idx > 0);
    //console.log(cleanSetArr);

    if (cleanSetArr[1] === "red") {
      redSum += Number(cleanSetArr[0]);
    } else if (cleanSetArr[1] === "blue") {
      blueSum += Number(cleanSetArr[0]);
    } else if (cleanSetArr[1] === "green") {
      greenSum += Number(cleanSetArr[0]);
    }
  }
  if (redSum <= 12 && greenSum <= 13 && blueSum <= 14) {
    return true;
  }
  return false;
}
