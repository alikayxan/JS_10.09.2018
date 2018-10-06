"use strict";

let btnAdd = document.querySelector('.btnAdd');
let btnSubtract = document.querySelector('.btnSubtract');
let btnMultiply = document.querySelector('.btnMultiply');
let btnDivide = document.querySelector('.btnDivide');
let btnModulo = document.querySelector('.btnModulo');

let output = document.querySelector('output');

let operand1 = document.querySelector('#operand1');
let operand2 = document.querySelector('#operand2');

let input = document.querySelector('#output');


btnAdd.addEventListener("click", function () {  
    output.innerText = Calculate('+');    
})
btnSubtract.addEventListener("click", function () {  
    output.innerText = Calculate('-');
})
btnMultiply.addEventListener("click", function () {  
    output.innerText = Calculate('*');
})
btnDivide.addEventListener("click", function () {  
    output.innerText = Calculate('/');
})
btnModulo.addEventListener("click", function () {  
    output.innerText = Calculate('%');
})


function Calculate(operator) {  
    let n1 = +operand1.value;
    let n2 = +operand2.value;

    switch(operator){
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
        case '%':
            return n1 % n2;
        default:
            return 0;
    }
}