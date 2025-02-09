"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector("button");
const numsResults = [];
const textResults = [];
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a + " " + b;
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return +a + +b;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener("click", function () {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numsResults.push(result);
    const stringResult = add(num1, num2);
    textResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numsResults, textResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked!");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split("w"));
});
