'use strict';

// // 1. Використовуючи цикли вивести на екран 20 символів «о».

for (let i = 0; i < 20; i++) {
    document.write(`o`)
}

// 2. Відобразити трикутник за допомогою символів «о»

for (let i = 0; i < 7; i++) {
    for (let j = 0; j <= i; j++) {
        document.write(`a`)
    }
    document.write(`<br>`)
}

// 2.1 Відобразити трикутник за допомогою символів «о»

let count0 = 1,
    countProb = 6
for (let i = 0; i < 7; i++) {
    for (let j = 0; j < countProb; j++) {
        document.write(`&nbsp;`)
    }
    countProb--
    for (let j = 0; j < count0; j++) {
        document.write(`0`)
    }
    count0++
    document.write("<br>")
}
