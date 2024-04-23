const add = (...args)  => args.reduce((sum, num) => sum + num);
const subtract = (...args)  => args.reduce((difference, num) => difference - num);
const multiply = (...args)  => args.reduce((product, num) => product * num);
const divide = (...args)  => args.reduce((quotient, num) => quotient / num);

const operate = (num1, operator, num2) => {
    switch (operator){
        case '+' :  
            console.log(add(num1,num2));
            break;
        case '-' :
            console.log(subtract(num1,num2));
            break;
        case '*' :
            console.log(multiply(num1,num2));
            break;
        case '/' :
            console.log(divide(num1,num2));
            break;
    }
}

const calcInput = document.querySelectorAll('.calcInput');
const screen = document.querySelectorAll('.screenShow');
calcInput.addEventListener('click', (event) => {
    console.log('hhh')
});