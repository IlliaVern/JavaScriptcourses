'use strict';

// «Тренажер множення». Розробити програму, яка випадковим чином (4 рази)
//  генерує перше число в межах від 1 до 9,
//  друге число від 1 до 9 
// і перевірити, чи знає користувач, чому дорівнює результат їх множення. Підрахувати кількість правильних відповідей.

let wrightAnswear = 0;
for (let i = 0; i < 4; i++) {
    let num1 = Math.floor(Math.random() * 9)+1
    let num2 = Math.floor(Math.random() * 9)+1
    let product = num1 * num2
    let userAnsw = parseInt(prompt(`${num1}*${num2}=`))
    if (product == userAnsw) {
        wrightAnswear++
    }
document.write(`Product:${product}, User:${userAnsw}<br>`)
}
document.write(`Ви відповіли правильно ${wrightAnswear} разів`)

// 1. Знайти перше від’ємне значення послідовності cos(lg(p)), p=2, 3, 4,…
let p=2
while (p>0) {
let res = Math.cos(Math.log10(p))
if (res<0) {
    document.write(`Перше від'ємне значення cos(lg(p)) = ${res} при p=${p}`)
    break
} else p++    
}

// 2.	Знайти найбільше (найменше) серед значень функції y= a*sin(x)  для значень аргументу x=kh (k=0,1,2,…,n), 
// що знаходиться до значення a/2.
let a = parseInt(prompt(`Введіть значення а`)),
    h = parseInt(prompt(`Введіть значення h`)),
    k = 0,
    min = 0,
    max = 0,
    n = a / 2;
while (k < n) {
    let x = k * h
    let y = a * Math.sin(x)
    if (y < min) {
        min = y
        k++
    } else k++
    if (y > max) {
        max = y
        k++
    } else k++
}
console.log(`Мінімальне значення у=${min.toFixed(5)}; максимальне значення у=${max.toFixed(5)}`)

// 3. Знайти серед послідовності чисел 1+1/2, 1+1/3,… перше число, яке менше заданого числа А.

// 4. Знайти середнє арифметичне чисел, значення яких вводяться з клавіатури. Введення закінчується після введеня 0.

let sum = 0,
    numCount = 0;
while (number !== 0) {
    var number = parseInt(prompt(`Введіть число`))
    sum += number
    numCount++
}
let averageArifm = sum / numCount
document.write(`Середнє арифметичне введених чисел = ${averageArifm}`)

// 5.	Знайти середнє арифметичне чисел, значення яких вводяться з клавіатури. 
// Введення закінчується після того, як сума стане більшою за число B.

let sum = 0,
    b = parseInt(prompt(`Введіть число B`)),
    numCount = 0;
while (sum <= b) {
    var number = parseInt(prompt(`Введіть число`))
    sum += number
    numCount++
}
let averageArifm = sum / numCount
document.write(`Середнє арифметичне введених чисел = ${averageArifm}, сума введених чисел = ${sum}, B = ${b}`)



