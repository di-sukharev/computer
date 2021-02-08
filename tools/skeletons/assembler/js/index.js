// Импортируем File System "fs" модуль для работы с файловой системой
const fs = require("укажите путь до модуля");
// Импортируем класс Assembler из файла Assembler.js, файл лежит рядом с этим файлом
const Assembler = импортируйте_файл_самостоятельно;

// Получаем аргументы с которыми был запущен скрипт
const inputFile = process.argv[укажите_номер_аргумента];
const outputFile = process.argv[укажите_номер_аргумента];

// Выводим аргументы в консоль, чтобы посмотреть на них в момент запуска скрипта
console.log("args: ", { inputFile, outputFile });

// Если аргумент inputFile не был передан или это не .asm файл, выбрасываем ошибку
if (напишите_условие_для_этого_выражения)
  throw new Error("Only .asm file can be assembled into .hack");

// Если аргумент outputFile не был передан или это не .hack файл, выбрасываем ошибку
if (напишите_условие_для_этого_выражения)
  // выбросите аналогичную ошибку для outputFile'а

// Создаем экземпляр класса Assembler, сохраняем в переменную assembler
const assembler = создайте_экземпляр_класса_Assembler;

// Пишем в консоль о начале выполнения скрипта
console.log("Started assembling ⏳");

// Читаем файл по адресу "/inputFile", сохраняем содержание файла в переменную assembly
const assembly = fs.readFileSync(inputFile, "utf8");

// Компилируем код на языке ассемблера в машинный язык, сохраняем результат в перменную hack
const hack = assembler.assemble(assembly);

// Создаем файл по адресу "/outputFile", записываем результат компиляции в файл
fs.writeFileSync(outputFile, hack);

// Пишем в консоль о завершении выполнения скрипта
console.log(`Finished assembling 🌞`);

// Далее напишите код для класса Assembler, файл находится рядом с этим файлом