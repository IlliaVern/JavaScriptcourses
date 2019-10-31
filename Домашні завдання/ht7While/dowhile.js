'use strict';

// 1. З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.

let sum = 0
do {
var num = parseInt(prompt(`Введіть число`))
    sum+=num
} while (num !== 0)
document.write(`Сума введених чисел=${sum}`)

// 2.З клавіатури вводитяться числа поки не буде введено 0. Знайти добуток чисел.

let product = 1
do {
    var num = parseInt(prompt(`Введіть число`))
        product*=num
    } while (num !== 0)
    document.write(`Добуток введених чисел=${product}`)
