import './main.css'

console.log('just todo it!')

// create factory function for generating to-do
//      title, description, date, priority, (notes & checklist)

const newTodoBtn = document.querySelector('.newTodoButton')
const todoForm = document.querySelector('.todoForm')
const titleInput = document.querySelector('#titleInput')
const descrTextArea = document.querySelector('#descriptionTextArea')
const prioritySelect = document.querySelector('#prioritySelect')
const addTodoBtn = document.querySelector('.addTodoButton')

console.log(todoForm)

let allTodos = []

console.log(prioritySelect)

function Todo(title, description, priority) {
  this.title = title
  this.description = description
  this.priority = priority
}

function addTodo(todo) {
  allTodos.push(todo)
}

function clearForm() {
  titleInput.value = ''
  descrTextArea.value = ''
  prioritySelect.value = ''
}

let workout = new Todo('Pull', 'Back, Biceps, Sqaut, Deadlift', 'High')

addTodo(workout)

newTodoBtn.addEventListener('click', (e) => {
  todoForm.style.display = 'grid'
})

addTodoBtn.addEventListener('click', (e) => {
  e.preventDefault()

  let title = titleInput.value
  let description = descrTextArea.value
  let priority = prioritySelect.value

  console.log('addddddd')
  let todo = new Todo(title, description, priority)
  addTodo(todo)
  console.log(allTodos)
  clearForm()
})

console.log(workout)
console.log(...allTodos)

//create function for adding creating to-do element

//function to remove todo

//function to edit todo

// function for poopulating page with all the todos

// project functionality

// date-fns

// styling

//
