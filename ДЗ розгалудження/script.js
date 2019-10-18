"use strict";

// Task 0.1

let position = prompt("1. Веселий\n2. Сумний\n3. Обурений\nВведіть пункт меню")

switch (position) {
    case "1": document.write("&#x1f603;")
        break;
    case "2": document.write("&#x1f614;")
        break;
    case "3": document.write("&#x1f620;")
        break;
    default: document.write("Невірний пункт меню")
        break;
}

// Task 1

let number = Math.floor(Math.random() * 5) + 1,
    answear = parseInt(prompt("Введіть загадане число"));

if (answear == number)
    alert(`Ви вгадали`)
else {
    let answear = parseInt(prompt("Введіть загадане число"))
    if (answear == number)
        alert(`Ви вгадали`)
    else
        alert(`Ви не вгадали`)
}
document.write(`Загадане число = ${number}`);

// Task 1.1

let beginInterval = Math.floor(Math.random()*100)+1,
    endInterval = Math.floor(Math.random()*100)+1,
    number = parseInt(prompt("Enter your number"));

if (beginInterval > endInterval) 
alert("Wrong interval randomized!!!"); else 
if (number >= beginInterval-10 && number <= endInterval+10) 
alert(`Ви виграли!!!`); else 
alert(`Ви програли(((`)

document.write(`Початок проміжку ${beginInterval} кінець проміжку ${endInterval}`)

// Task 2

let number = Math.floor(Math.random() * 10) + 1,
    user1Answear = parseInt(prompt("Перший користувач введіть загадане число")),
    user2Answear = parseInt(prompt("Другий користувач введіть загадане число"));

if (Math.abs(number - user1Answear) < Math.abs(number - user2Answear))
    alert("Виграв перший користувач");
else if (user1Answear != user2Answear)
    alert("Виграв другий користувач"); 
else alert("Введено однакові числа!!!");
document.write(`Загадане число ${number}! число 1-го користувача - ${user1Answear}; число 2-го користувача - ${user2Answear}`)

// Task 3


// Task 4


// Task 5

let bal1 = 0,
    bal2 = 0,
    number1 = Math.floor(Math.random() * 12) + 1,
    number2 = Math.floor(Math.random() * 12) + 1;

if (window.confirm("Перший гравець кинув " + number1 + " Кинути другий раз?"))
    number1 = Math.floor(Math.random() * 12) + 1
if (window.confirm("Другий гравець кинув " + number2 + " Кинути другий раз?"))
    number2 = Math.floor(Math.random() * 12) + 1

if (number1 % 2 == 0) bal1 += number1;
else bal1 -= number1

if (number2 % 2 == 0) bal2 += number2;
else bal2 -= number2

if (bal1 > bal2)
    document.write('Виграв перший гравець');
else
    document.write('Виграв другий гравець');

document.write(`<br>Перший гравець викинув ${number1}<br>Другий гравець викинув ${number2}`)



// 1.1. Найбільше серед двох різних замінити на 0.

let a = parseInt(prompt("Fisrt number")),
    b = parseInt(prompt("Second number"));

if (a > b) 
a = 0; else {b = 0};

alert(`First number = ${a} second number = ${b}`);

// 1.1.1. Найбільше серед двох замінити на 0. Якщо однакові, то замінити обидва на 1.

let a = parseInt(prompt("Fisrt number")),
    b = parseInt(prompt("Second number"));

if (a == b) 
a=b=1; else {
if (a > b) 
a = 0; else {b = 0};
}

alert(`First number = ${a} second number = ${b}`);