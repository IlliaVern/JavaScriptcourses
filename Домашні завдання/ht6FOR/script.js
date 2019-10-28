'use strict';

// 1. Використовуючи цикли вивести на екран 20 символів «о».

for (let i = 0; i < 20; i++) {
    document.write(`o`)
}

// 2. Відобразити трикутник за допомогою символів «о»

for (let i = 0; i < 7; i++) {
    for (let j = 0; j <= i; j++) {
        document.write(`o`)
    }
    document.write(`<br>`)
}

// 2.1 Відобразити трикутник за допомогою символів «о»

let countProb = 7
for (let i = 0; i < 7; i++) {
    for (let j = 0; j < countProb; j++) {
        document.write(`&nbsp;&nbsp;`)
    }
    countProb--
    for (let j = 0; j <= i; j++) {
        document.write(`o`)
    }
    document.write("<br>")
}

//3. Відобразити трикутник за допомогою символів «о»

for (let i = 0; i < 12; i++) {
    for (let j = 12; j > i; j--) {
        document.write(`o`)
    }
    document.write(`<br>`)
}

// 3.1 Відобразити трикутник за допомогою символів «о»

let countProb = 12
for (let i = 0; i < 12; i++) {
    for (let j = 0; j <= i; j++) {
        document.write(`&nbsp;&nbsp;`)
    }
    for (let j = 0; j < countProb; j++) {
        document.write(`o`)
    }
    countProb--
    document.write("<br>")
}

// 4. Побудувати ялинку

for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            document.write(`o`)
        }
        document.write(`<br>`)
    }
}