const VMtranslator = require("./VMtranslator.js");
const { performance } = require("perf_hooks");

var [nodeExecPath, currentPath, inputDirectoryName] = process.argv;

console.log("args: ", { inputDirectoryName });

const translator = new VMtranslator();

console.info("Translating ⏳");
const started = performance.now();
translator.translate(inputDirectoryName);
const finished = performance.now();

console.info(`Translated 🌞 took ${(finished - started).toFixed(2)} ms`);
