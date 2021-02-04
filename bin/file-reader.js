const fileSystem = require("fs");
const readline = require("readline");
const events = require("events");

const readLineByLine = async (
  onStartedReading,
  onLineRead,
  onFinishedReading
) => {
  try {
    const fileReader = readline.createInterface({
      input: fileSystem.createReadStream(__dirname + "/wordlist.txt", "utf8"),
      crlfDelay: Infinity,
    });

    onStartedReading();

    fileReader.on("line", (line) => {
      onLineRead(line);
    });

    await events.once(fileReader, "close");

    onFinishedReading();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { readLineByLine };
