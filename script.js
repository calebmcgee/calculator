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

const screen = document.querySelector('.screenContent');
const calcInput = Array.from(document.querySelectorAll('.calcInput'));
const clear = document.querySelector('.clear');
console.log(calcInput[0].textContent);
calcInput.map((button) => {
    button.addEventListener('click', event => {
        screen.textContent += button.textContent;
    })
});

clear.addEventListener('click', (event) => {
    screen.textContent = '';
})


