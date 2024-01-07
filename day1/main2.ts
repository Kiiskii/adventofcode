import fs from "fs";

// Day 1 Part 2

/* const digitWords = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
]; */

const numbers = {
  one: "1",
  "1": "1",
  two: "2",
  "2": "2",
  three: "3",
  "3": "3",
  four: "4",
  "4": "4",
  five: "5",
  "5": "5",
  six: "6",
  "6": "6",
  seven: "7",
  "7": "7",
  eight: "8",
  "8": "8",
  nine: "9",
  "9": "9",
};

const numbersAsKeys = Object.keys(numbers) as (keyof typeof numbers)[];

function findNumbers(line: string) {
  let firstNumber: string | undefined;
  let lastNumber: string | undefined;

  for (let i = 0; i < line.length; i++) {
    let firstNumber: string | undefined;
    let lastNumber: string | undefined;
    for (let i = 0; i < line.length; i++) {
      if (firstNumber === undefined) {
        const maybeFirstNumber = line.slice(i, i + 5);
        const firstTextNumber = numbersAsKeys.find((key) =>
          maybeFirstNumber.startsWith(key)
        );
        if (firstTextNumber) {
          firstNumber = numbers[firstTextNumber];
        }
      }
      if (lastNumber === undefined) {
        const maybeDigit = line.slice(
          Math.max(line.length - i - 5, 0),
          line.length - i
        );

        const textNumber = numbersAsKeys.find((key) =>
          maybeDigit.endsWith(key)
        );
        if (textNumber) {
          lastNumber = numbers[textNumber];
        }
      }
    }
    console.log(firstNumber, lastNumber);
  }

  if (firstNumber !== null && lastNumber !== null) {
    const combinedNumber = Number(`${firstNumber}${lastNumber}`);
    return combinedNumber;
  }
  return null;
}

let sum = 0;

fs.readFile("testdata.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const lines = data.split("\n");
  for (let line of lines) {
    const a = findNumbers(line);
    if (a !== null) {
      sum += a;
    }
  }
  console.log(sum);
});
