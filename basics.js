"use strict";
//with typescript !
// Here some of the basics of typescript has been discussed
function add(n1, n2, printResult) {
    if (printResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 200;
const number2 = 10;
const renderResult = true;
add(number1, number2, renderResult);
