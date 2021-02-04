#!/usr/bin/env node

const ui = require("./ui");
const fileReader = require("./file-reader");
const anagramer = require("./anagramer");

(async function main() {
  ui.printHeader("Anagramer");

  const handleStartedReading = () =>
    ui.print("Please wait while the file is being processed...\n(Press any key in case you've been waiting for quite a while)");
  const handleLineRead = (line) => anagramer.parseWord(line);
  const handleFinishedReading = () => ui.clear();

  await fileReader.readLineByLine(
    handleStartedReading,
    handleLineRead,
    handleFinishedReading
  );

  let word = null;
  while (true) {
    word = await ui.readInput("Enter the word: ");

    if (word === "") continue;

    const anagrams = anagramer.findAllAnagrams(word);

    ui.printResults(word, anagrams);
  }
})();
