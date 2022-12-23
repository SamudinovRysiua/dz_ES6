let number = prompt('поставьте оценку 1 до 10');

if(number > 10){
    console.log('введите число от 1 до 10')
}else if (number >  5){
    console.log('спасибо за высокую оценку')
}else if (number < 5){
    console.log('Мы рабоатем над улучшением сайта')
}else if (number.isNaN){
    console.log('number')
}else{
    console.log('error')
}