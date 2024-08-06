#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todos = [];
var condition = true;
while (condition) {
    var addtask = await inquirer_1.default.prompt([
        {
            name: 'todo',
            type: 'input',
            Message: "What do you want to add in your todos?"
        },
        {
            name: 'addmore',
            type: 'confirm',
            Message: "Do you want to add more?",
            default: "false"
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}
