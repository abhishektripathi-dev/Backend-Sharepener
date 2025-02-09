const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

const numsResults: Array<number> = [];
const textResults: string[] = [];

type NumOrString = number | string;
type Result = { val: number; timestamp: Date };

interface ResultObj {
  val: number;
  timestamp: Date;
}

function add(a: NumOrString, b: NumOrString) {
    if (typeof a === "string" || typeof b === "string") {
        return a + " " + b;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return +a + +b;
}

function printResult(resultObj: ResultObj) {
    console.log(resultObj.val);
}

buttonElement.addEventListener("click", function () {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numsResults.push(result as number);
    const stringResult = add(num1, num2);
    textResults.push(stringResult as string);
    printResult({ val: result as number, timestamp: new Date() });
    console.log(numsResults, textResults);
});

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked!");
    }, 1000);
});

myPromise.then((result) => {
    console.log(result.split("w"));
});
