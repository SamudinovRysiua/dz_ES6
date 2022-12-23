//task 1
const plus = document.querySelector('#increment')
const  minus = document.querySelector('#decrement')
const  reset = document.querySelector('#reset')
const  num = document.querySelector('.number')


let number = 0

plus.addEventListener('click', () => {
    number ++
    num.innerText = number
    num.style.color = "green"
})

minus.addEventListener('click', () => {
    number --
    if (number < 1 ){
        number = 0
    }
    num.innerText = number
    num.style.color = "red"
})

reset.addEventListener('click', () => {
    number = 0
    num.innerText = number
    num.style.color = "gray"
})

// task 2
// светофор
const color = prompt('Введите цвет \nКрасный, \nЖелтый, \nЗеленый :').trim().toLowerCase()
const Red = document.getElementsByClassName('red')
const Yellow = document.getElementsByClassName('yellow')
const Green = document.getElementsByClassName('green')


switch (color) {
    case 'красный':
        Red[0].style.background = 'red'
        Red[0].innerHTML = 'Stop'
        break;
    case 'желтый':
        Yellow[0].style.background = 'yellow'
        Yellow[0].innerHTML = 'Wait'
        break;
    case 'зеленый':
        Green[0].style.background = 'green'
        Green[0].innerHTML = 'GO'
        break;
    default:
        Red[0].style.background = 'red'
        Yellow[0].style.background = 'yellow'
        Green[0].style.background = 'green'
        Red[0].innerHTML = "Эу пиши "
        Yellow[0].innerHTML = "Цвета"
        Green[0].innerHTML = "СВЕТОФОРА!!!!!"
}


//task3

const posX = document.getElementById('posX')
const posY = document.getElementById('posY')
window.addEventListener('mousemove',(event) => {
    let x =event.screenX
    let y = event.screenY

    posX.innerText = x
    posY.innerText = y
})