let a = prompt ('Введите первое число')
let b = prompt ('Введите второе число')


function alfa (a,b) {
    if (isNaN(a) || isNaN(b)) {
        alert('Введите число!!!')
        return;
    }
    console.log(Math.min(a,b))
}
alfa (a,b)

// 2 part
const word = prompt("Что-нибудь напишите, пожалуйста");
function returnFunction(word) {
    console.log(`Длина строки равна ${word.length}`)
}
returnFunction(word)

// 3 part
function calculator(a, b) {
    let number1 = Number(prompt('Введите первое число').trim())
    let operation = prompt('Выберите действие\n+\n-\n/\n*')
    let number2 = Number(prompt('Введите второе число').trim())

    switch (operation) {
        case'+':
            alert(number1 + number2)
            break;
        case'-':
            alert(number1 - number2)
            break;
        case'/':
            if (number2 === 0) {
                alert('На ноль делить нельзя')
            } else {
                alert(number1 / number2)
            }
            break;
        case'*':
            alert(number1 * number2)
            break;
        default:
            alert('Введите только числа')
    }
}
calculator()