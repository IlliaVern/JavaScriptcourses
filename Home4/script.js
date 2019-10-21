"use strict";

// document.getElementById("sum").value="777"
// document.getElementById("btn").onclick=function() {
//     var n1=parseInt(document.getElementById("num1").value)
//     var n2=parseInt(document.getElementById("num2").value)
//     var n3=parseInt(document.getElementById("num3").value)

//     var sum = n1 + n2 +n3
//     document.getElementById("sum").value = sum

// }
document.getElementById("btn").onclick=function() {
    var age=parseInt(document.getElementById("age").value)
    if (age >= 18 && age <=65)
    document.getElementById("res").value = "OK))!!!"
    else document.getElementById("res").value = "NO("
     
}