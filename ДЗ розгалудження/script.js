"use strict";

// Task 0.1

let position = prompt("1. Веселий\n2. Сумний\n3. Обурений\nВведіть пункт меню")

switch (position) {
    case "1":
        document.write("&#x1f603;")
        break;
    case "2":
        document.write("&#x1f614;")
        break;
    case "3":
        document.write("&#x1f620;")
        break;
    default:
        document.write("Невірний пункт меню")
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

let beginInterval = Math.floor(Math.random() * 100) + 1,
    endInterval = Math.floor(Math.random() * 100) + 1,
    number = parseInt(prompt("Enter your number"));

if (beginInterval > endInterval)
    alert("Wrong interval randomized!!!");
else
if (number >= beginInterval - 10 && number <= endInterval + 10)
    alert(`Ви виграли!!!`);
else
    alert(`Ви програли(((`)

document.write(`Початок проміжку ${beginInterval}, ваше число ${number}, кінець проміжку ${endInterval}`)

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

let squareAmount = parseInt(prompt("Введіть кількість квадратів")),
    shipPosition = Math.floor(Math.random() * squareAmount) + 1,
    shot1 = parseInt(prompt("Введіть номер клітинки для 1-го пострілу"));
var shot2;

if (shipPosition == shot1)
    alert("Корабель потоплено!!!");
else {
    if (shipPosition == (shot1 + 1) || shipPosition == (shot1 - 1)) {
        alert("Корабель пошкоджено")
        shot2 = parseInt(prompt("Введіть номер клітинки для 2-го пострілу"))
        if (shipPosition == shot2)
            alert("Корабель потоплено!!!");
        else alert("Ви не влучили АЛЕ корабель пошкоджено")
    } else {
        shot2 = parseInt(prompt("Введіть номер клітинки для 2-го пострілу"))
        if (shipPosition == shot2)
            alert("Корабель потоплено!!!");
        else if (shipPosition == (shot2 + 1) || shipPosition == (shot2 - 1))
            alert("Ви не влучили АЛЕ корабель пошкоджено");
        else alert("Ви не влучили")
    }
}
document.write(`Корабель знаходився у ${shipPosition} клітинці`)

// Task 4


// Task 5

let bal1,
    bal2,
    number1 = Math.floor(Math.random() * 12) + 1,
    number2 = Math.floor(Math.random() * 12) + 1;

bal1 = number1 % 2 == 0 ? number1 : -number1
bal2 = number2 % 2 == 0 ? number2 : -number2

if (window.confirm("Перший гравець кинув " + number1 + " Кинути другий раз?")) {
    number1 = Math.floor(Math.random() * 12) + 1
    bal1 += number1 % 2 == 0 ? number1 : -number1
    document.write(`<br>Перший гравець з 2-го разу кинув ${number1}`)
}

if (window.confirm("Другий гравець кинув " + number2 + " Кинути другий раз?")) {
    number2 = Math.floor(Math.random() * 12) + 1
    bal2 += number2 % 2 == 0 ? number2 : -number2
    document.write(`<br>Другий гравець з 2-го разу кинув ${number2}<br>`)
}

if (bal1 > bal2)
    document.write('Виграв перший гравець');
else
    document.write('Виграв другий гравець');

document.write(`<br>Перший гравець має ${bal1} балів. Другий гравець має ${bal2} балів`)


// 1.1. Найбільше серед двох різних замінити на 0.

let a = parseInt(prompt("Fisrt number")),
    b = parseInt(prompt("Second number"));

if (a > b)
    a = 0;
else {
    b = 0
};

alert(`First number = ${a} second number = ${b}`);

// 1.1.1. Найбільше серед двох замінити на 0. Якщо однакові, то замінити обидва на 1.

let a = parseInt(prompt("Fisrt number")),
    b = parseInt(prompt("Second number"));

if (a == b)
    a = b = 1;
else {
    if (a > b)
        a = 0;
    else {
        b = 0
    };
}

alert(`First number = ${a} second number = ${b}`);