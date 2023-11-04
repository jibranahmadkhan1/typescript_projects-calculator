#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Please enter your first number"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Please enter your second number"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "select operator"
    }
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let results = 0;
    if (operator === "+") {
        results = numberOne + numberTwo;
    }
    else if (operator === "-") {
        results = numberOne - numberTwo;
    }
    if (operator === "*") {
        results = numberOne * numberTwo;
    }
    if (operator === "/") {
        results = numberOne / numberTwo;
    }
    console.log("Your results is :", results);
}
else {
    console.log("please enter valid input");
}
