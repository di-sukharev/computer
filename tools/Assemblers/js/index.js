const fs = require("fs");
const path = require("path");
const Assembler = require("./Assembler.js");
const { performance } = require("perf_hooks");

const [
    // eslint-disable-next-line no-unused-vars
    nodeExecPath,
    // eslint-disable-next-line no-unused-vars
    thisFilePath,
    inputFile,
    outputFile = path.basename(inputFile, path.extname(inputFile)) + ".hack",
] = process.argv;

console.log("args: ", { inputFile, outputFile });

if (!inputFile.endsWith(".asm"))
    throw new Error("Only .asm file can be assembled into .hack");

console.log("Started assembling ⏳");

const started = performance.now();

const assembler = new Assembler();
const assembly = fs.readFileSync(inputFile, "utf8");
const binary = assembler.assemble(assembly);
fs.writeFileSync(`${path.dirname(inputFile)}/${outputFile}`, binary);

const finished = performance.now();

console.log(
    `Finished assembling 🌞 took ${(finished - started).toFixed(2)} ms`
);
