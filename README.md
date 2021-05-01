# Устройство и программирование компьютера 🧮 🏗 💻

Задачи для самостоятельной практики в рамках учебника — [sukharev.io](https://www.sukharev.io)

## Настройка окружения

Чтобы решать задачи — нужно писать программы. Чтобы компьютер мог выполнить эти программы — нужно настроить для него окружение.

Настройка состоит из двух шагов:

1. Установите **Java Development Kit** (JDK), чтобы запустить симулятор железа компьютера. Симулятор в котором собирается компьютер написан на языке программирования Java. JDK — это программа, которая выполняет Java код.
2. Установите **редактор кода**, чтобы писать в нем программы. Редактор кода — это такая же программа, как ворд. **Ворд** редактирует **текст**. **Редактор** кода редактирует **код**.

## JDK

- Установите JDK (предпочтительно 14 версию) — [https://www.oracle.com/java/technologies/javase-downloads.html](https://www.oracle.com/java/technologies/javase-downloads.html). Сайт официальный. Скриншот-инструкция ниже:

![Instruction how to download JDK](/img/how2download-jdk.png)

### Установка переменных окружения (обязательно для Windows)

1. Откройте «Панель управления» (Control Panel), затем «Система» (System).
2. Кликните в «Расширенные настройки» (Advanced), а потом «Переменные окружения» (Environment Variables).
3. Кликните «Редактировать переменные окружения» (Edit the system environment variables). Далее кликните «Новая» (New).
4. В Системных переменных (System Variables) добавьте две новые переменные JRE_HOME и JAVA_HOME.
5. В каждую переменную запишите адрес до папки `bin` из JDK, которую вы только что установили. Обычно JDK устанавливается по адресу `C:\Program Files\Java\jdk-9\bin`.

Если у вас Windows и в процессе выполнения задач вы столкнетесь с ошибкой `You need to install [Java Runtime Environment] First. [Done] Comparison Failure with code=2` — значит вы неправильно установили переменные. Перечитайте этот раздел и выполните шаги еще раз. Если ничего не помогает — пишите в телеграм группу [t.me/sukharev_qa](https://www.t.me/sukharev_qa).

## Редактор кода

[Установите редактор кода — VSCode](https://code.visualstudio.com/download)

Далее, откройте VSCode и установите расширения Nand2Tetris. Скриншот-инструкция ниже.

![Instruction how to download vscode extensions for nand2tetris](/img/how2download-vscode_extensions.png)

## Задачи

После настройки скачайте zip архив с задачами.

В архиве 12 проектов. В каждом проекте хранятся практические задания. Один проект — это один уровень абстракции компьютера. В папках проекта в файлах README.md описаны подробные инструкции по выполнению проекта. Когда открываете какую-то папку — сразу смотрите, есть ли в папке README инструкция.

Ниже картинка, как скачать архив.

![Instruction how to download repo manually](/img/how2download-zip.png)

Все вопросы задавайте в телеграм группе [t.me/sukharev_qa](https://www.t.me/sukharev_qa) 🌞

## Далее

Перед тем как начать выполнять практические задачи — почитайте [что такое HDL](/projects/README.md).

## Лицензия

Задачи доступны по лицензии [Creative Common Attribution-NonCommercial-ShareAlike 3.0 Unported License](https://creativecommons.org/licenses/by-nc-sa/3.0/) в рамках книги «The Elements of Computing Systems» и проекта Nand2Tetris. Спасибо авторам — Ноаму Нисану (Noam Nisan) и Шимону Шокену (Shimon Schocken) ❤️
