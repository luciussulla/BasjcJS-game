const input = document.querySelector('input')
const form = document.querySelector('form')
const taskNumber = document.querySelector('h1 span')
const ul= document.querySelector('ul.tasks')
const listItems = document.querySelectorAll('li')
let numOfItems; 
const span = document.querySelector('h1 span')

const calculate = ()=> {
    let num = document.querySelectorAll('ul.tasks li').length
    console.log(num)
    return num 
}

const removeTask = (e)=> {
    console.log(e.target.parentNode)
    e.target.parentNode.remove()
}

const addTask = (e)=> {
    e.preventDefault()
    const titleTask = input.value
    if (titleTask === '') return
    console.log(titleTask)
    const task = document.createElement('li')
    task.className = 'task'
    task.innerHTML = titleTask + "<button>Usun</button>"
    ul.appendChild(task)
    input.value = ''
    numOfItems = calculate()
    span.textContent = numOfItems
    // remove task 
    task.querySelector('button').addEventListener('click', removeTask)
}

form.addEventListener('submit', addTask)
