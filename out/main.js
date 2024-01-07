"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var writtenToNumericMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};
function getNumber(line) {
    for (var writtenNumber in writtenToNumericMap) {
        var numericValue = writtenToNumericMap[writtenNumber];
        var regex = new RegExp(writtenNumber, "gi");
        line = line.replace(regex, numericValue.toString());
    }
    var firstNumber = null;
    var lastNumber = null;
    for (var _i = 0, line_1 = line; _i < line_1.length; _i++) {
        var value = line_1[_i];
        if (/\d/.test(value)) {
            var currentNumber = Number(value);
            if (firstNumber === null) {
                firstNumber = currentNumber;
            }
            lastNumber = currentNumber;
        }
    }
    if (firstNumber !== null && lastNumber !== null) {
        var combinedNumber = Number("".concat(firstNumber).concat(lastNumber));
        console.log(combinedNumber);
        return combinedNumber;
    }
    return null;
}
var sum = 0;
fs_1.default.readFile("testdata.txt", "utf8", function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    var lines = data.split("\n");
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var a = getNumber(line);
        if (a !== null) {
            sum += a;
        }
    }
    console.log(sum);
});
//# sourceMappingURL=main.js.map