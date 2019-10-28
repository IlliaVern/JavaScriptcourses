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

// 5. Інвестор вклав s тис. грн.. на 20 років під 20% річних. 
// Визначити за допомогою циклів суму, яку він одержить (без оподаткування).

let s=Math.floor(prompt("Enter your deposit in тис. грн."))
for (let i = 0; i < 20; i++) {
    s=s+s*0.2
}
document.write(`Finish sum=${Math.floor(s)}`)

// 6. Інвестор вклав s тис. грн.. на 20 років під 20% річних, податок складає 5% від суми прибутку. 
// Визначити за допомогою циклів суму, яку він одержить.

let s=Math.floor(prompt("Enter your deposit in тис. грн."))
for (let i = 0; i < 20; i++) {
    s=s+(s*0.2)*0.95
}
document.write(`Finish sum=${Math.floor(s)}`)

// 7. Інвестор вклав s тис. грн.. на 20 років під 20% річних а потім на 17 років під 27% річних. 
// Визначити за допомогою циклів суму, яку він одержить.

let s=Math.floor(prompt("Enter your deposit in тис. грн."))
for (let i = 0; i < 20; i++) {
    s=s+s*0.2
}
for (let j = 0; j < 17; j++) {
    s=s+s*0.27
}
document.write(`Finish sum=${Math.floor(s)}`)