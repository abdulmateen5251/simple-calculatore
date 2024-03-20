#! /usr/bin/env node

import inquirer from "inquirer"

const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of this operator to perfome operation",
        type: "list",
        name: "operator",
        choices: ["addition", "substruction", "multipliction", "division"],
    },
]);
console.log(answer)
// conditional statemant
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "substruction") {
    console.log(answer.firstNumber - answer.secondNumber);    
}else if (answer.operator === "multipliction") {
    console.log(answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("please select valid number")
}
