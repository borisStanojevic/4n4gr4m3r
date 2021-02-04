const chalk = require("chalk");
const figlet = require("figlet");

const createConsoleInterface = () => {
  const readline = require("readline");

  return readline.createInterface(process.stdin, process.stdout);
};

const consoleInterface = createConsoleInterface();

const readInput = (question) =>
  new Promise((resolve) => {
    consoleInterface.question(question, (answer) => {
      resolve(answer);
      console.clear();
    });
  });

const printHeader = (headerText) => {
  console.clear();
  console.log("\n");
  console.log(
    chalk.green.bold(
      figlet.textSync(headerText, {
        horizontalLayout: "full",
      })
    )
  );
  console.log("\n");
};

const printResults = (word, anagrams) => {
  console.log(
    `A total of ${chalk.green.bold(
      anagrams && anagrams.length
    )} anagrams were found for the word ${chalk.green.bold(word)}:`
  );
  console.log(anagrams);
  console.log("");
};

const print = (text) => {
  console.log(text);
};

const clear = () => {
  console.clear();
};

module.exports = { printHeader, printResults, print, readInput, clear };
