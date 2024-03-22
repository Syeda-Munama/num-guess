#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    { name: "userGuess",
        type: "number,",
        message: "Please enter a number between 1-10:" },
]);
const userGuessNumber = Number(answers.userGuess);
if (userGuessNumber === randomNumber) {
    console.log("Congratulation, you guess right.");
}
else {
    console.log(`You guessed wrong! The right number is ${randomNumber}.`);
}
