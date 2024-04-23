const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const screen = document.querySelector('.screenContent');
const calcInput = Array.from(document.querySelectorAll('.calcInput'));
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');

const operate = (num1, operator, num2) => {
    switch (operator){
        case '+' :  
            screen.textContent = add(num1,num2);
            break;
        case '-' :
            screen.textContent = subtract(num1,num2);
            break;
        case '*' :
            screen.textContent = multiply(num1,num2);
            break;
        case '/' :
            if (num2 === 0){
                screen.textContent = 'Undefined';
            } else {
                screen.textContent = divide(num1,num2);
            }
            break;
    }
}

console.log(calcInput[0].textContent);
calcInput.map((button) => {
    button.addEventListener('click', event => {
        if (button.textContent === '+' || button.textContent === '-' || button.textContent === '*' || button.textContent === '/'){
            screen.textContent += ' ' + button.textContent + ' ';

        } else {
            screen.textContent += button.textContent;
        }
    })
});

clear.addEventListener('click', (event) => {
    screen.textContent = '';
});

equals.addEventListener('click', (event)=>{
        let num1 = parseInt(screen.textContent.split(' ')[0]);
        let num2 = parseInt(screen.textContent.split(' ')[2]);
        let operator = screen.textContent.split(' ')[1];
        operate(num1,operator, num2);
});




