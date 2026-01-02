#!/usr/bin/env node

console.log("Welcome to my CLI tool!");
console.log("This tool helps you manage your projects efficiently.");
console.log("Use 'mycli --help' to see available commands.");
console.log("Happy coding!");

const args = process.argv.slice(2);
const command = args[0];
const value = args[1];

console.log(`You entered the command: ${command}`);
