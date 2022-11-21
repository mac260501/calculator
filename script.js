const displayValue = document.querySelector('.result');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    
    if (!isNaN(button.id))
    {
        button.addEventListener('click', (e) => {
            displayValue.textContent = Number(displayValue.textContent + e.target.id);
        });
    }
    else if (button.id === 'clear')
    {
        button.addEventListener('click', (e) => {
            displayValue.textContent = '';
        });
    }
    else if (button.id === 'delete')
    {
        button.addEventListener('click', (e) => {
            if (displayValue.textContent !== '')
            {
                displayValue.textContent = displayValue.textContent.slice(0, -1);
            }
        });
    }
});



function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function divide(num1, num2)
{
    return num1 / num2;
}

function operate(op, num1, num2)
{
    if (op === '+')
    {
        return add(num1, num2);
    }
    else if (op === '-')
    {
        return subtract(num1, num2);
    }
    else if (op === '*')
    {
        return multiply(num1, num2);
    }
    else if (op === '/')
    {
        return divide(num1, num2);
    }
    else
    {
        return 'Error';
    }
}