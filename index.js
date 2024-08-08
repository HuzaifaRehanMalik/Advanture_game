#! /usr/bin/env node 
// Advanture Game
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecress() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncress() {
        let fuel = 100;
        this.fuel = fuel;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecress() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncress() {
        let fuel = 100;
        this.fuel = fuel;
    }
}
let player1 = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter your name",
});
console.log(player1.name);
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your opponent",
    choices: ["Skeleton", "Assasin", "Zombie"],
});
console.log(opponent.select);
let p1 = new Player(player1.name);
let o1 = new Opponent(opponent.select);
do {
    // Skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your action",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecress();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(`YOU LOOSE, BETTER LUCK NEXT TIME`));
                    process.exit();
                }
            }
            else if (num <= 0) {
                o1.fuelDecress();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic(`YOU WIN!`));
                    process.exit();
                }
            }
        }
        else if (ask.opt == "Drink Portion") {
            p1.fuelIncress();
            console.log(chalk.bold.italic.green(`YOU DRINK PORTION YOUR FUEL IS ${p1.fuel}`));
        }
        else if (ask.opt == "Run For Your Life..") {
            console.log(chalk.red.bold.italic(`YOU LOOSE, BETTER LUCK NEXT TIME`));
            process.exit();
        }
    }
    ;
    if (opponent.select == "Assasin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your action",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecress();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(`YOU LOOSE, BETTER LUCK NEXT TIME`));
                    process.exit();
                }
            }
            else if (num <= 0) {
                o1.fuelDecress();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic(`YOU WIN!`));
                    process.exit();
                }
            }
        }
        else if (ask.opt == "Drink Portion") {
            p1.fuelIncress();
            console.log(chalk.bold.italic.green(`YOU DRINK PORTION YOUR FUEL IS ${p1.fuel}`));
        }
        else if (ask.opt == "Run For Your Life..") {
            console.log(chalk.red.bold.italic(`YOU LOOSE, BETTER LUCK NEXT TIME`));
            process.exit();
        }
    }
    // Zombie
    else if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your action",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecress();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(`YOU LOOSE, BETTER LUCK NEXT TIME`));
                    process.exit();
                }
            }
            else if (num <= 0) {
                o1.fuelDecress();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic(`YOU WIN!`));
                    process.exit();
                }
            }
        }
        else if (ask.opt == "Drink Portion") {
            p1.fuelIncress();
            console.log(chalk.bold.italic.green(`YOU DRINK PORTION YOUR FUEL IS ${p1.fuel}`));
        }
        else if (ask.opt == "Run For Your Life..") {
            console.log(chalk.red.bold.italic(`YOU LOOSE, BETTER LUCK NEXT TIME`));
            process.exit();
        }
    }
} while (true);
