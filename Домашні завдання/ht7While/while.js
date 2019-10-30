'use strict';

// // «Тренажер множення». Розробити програму, яка випадковим чином (4 рази)
// //  генерує перше число в межах від 1 до 9,
// //  друге число від 1 до 9 
// // і перевірити, чи знає користувач, чому дорівнює результат їх множення. Підрахувати кількість правильних відповідей.

// let wrightAnswear = 0;
// for (let i = 0; i < 4; i++) {
//     let num1 = Math.floor(Math.random() * 9)+1
//     let num2 = Math.floor(Math.random() * 9)+1
//     let product = num1 * num2
//     let userAnsw = parseInt(prompt(`${num1}*${num2}=`))
//     if (product == userAnsw) {
//         wrightAnswear++
//     }
// document.write(`Product:${product}, User:${userAnsw}<br>`)
// }
// document.write(`Ви відповіли правильно ${wrightAnswear} разів`)

// // 1. Знайти перше від’ємне значення послідовності cos(lg(p)), p=2, 3, 4,…
// let p=2
// while (p>0) {
// let res = Math.cos(Math.log10(p))
// if (res<0) {
//     document.write(`Перше від'ємне значення cos(lg(p)) = ${res} при p=${p}`)
//     break
// } else p++    
// }

// 2.	Знайти найбільше (найменше) серед значень функції y= a*sin(x)  для значень аргументу x=kh (k=0,1,2,…,n), 
// що знаходиться до значення a/2.
let a=parseInt(prompt(`Введіть значення а`)),
    k = 0,
    n = a/2;
    while (k<n) {
        let x = k * n
        let y = a * Math.sin(x)
        var min = y
        var max = y
        if (y < min) {
            min = y
            k++
        } else k++
    //     if (y > max) {
    //     max = y
    //     k++
    // } else k++
    }
    console.log(`Мінімальне значення у=${min}; максимальне значення у=${max}`)


