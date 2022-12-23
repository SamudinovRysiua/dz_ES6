
//task-1
const inputText = document.getElementById('inputType');
const reverseText = document.getElementById('reverseType');
const btnReverse = document.getElementById('btnReverse')
const persons = [
    {name: 'Nurdin', age: 19},
    {name: 'Kairat', age: 20},
    {name: 'Ivan', age: 17},
    {name: 'Aida', age: 20},
    {name: 'Milana', age: 15},
    {name: 'Ahmad', age: 19},
]


function func(str) {
    persons.forEach(person => {
    const h1 = document.createElement('h1')
    document.body.append(h1)
    h1.append(`Name: ${person.name}, Age: ${person.age}`)
})
        return str.split('').reverse().join('')
}


btnReverse.addEventListener('click', () => {
    reverseText.textContent =  func(inputText.value)
    }
)
//task-2
