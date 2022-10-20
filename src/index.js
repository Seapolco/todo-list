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
const displayTodos = document.querySelector('.displayTodos')
const todoList = document.querySelector('.todoList')

console.log(todoList)

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

function clearTodos() {
  while (todoList.lastChild) {
    todoList.removeChild(todoList.lastChild)
  }
}

// need to split this function into multiple functions

function elementFactory(todo, type, attributes, content) {
  let element = document.createElement(type)

  for (let key in attributes) {
    element.setAttribute(key, attributes[key])
  }

  if (content) {
    element.appendChild(document.createTextNode(todo[content]))
  }

  return element
}

function createTodoListItem(todo) {
  let todoLi = elementFactory(todo, 'li', { class: 'todoListItem' })
  let checkIcon = elementFactory(todo, 'div', { class: 'checkIcon' })
  let todoTitle = elementFactory(todo, 'p', { class: 'todoTitle' }, 'title')
  let todoDescription = elementFactory(
    todo,
    'p',
    { class: 'todoDescription' },
    'description'
  )
  let todoPriority = elementFactory(
    todo,
    'p',
    { class: 'todoPriority' },
    'priority'
  )

  todoLi.appendChild(checkIcon)
  todoLi.appendChild(todoTitle)
  todoLi.appendChild(todoDescription)
  todoLi.appendChild(todoPriority)

  todoList.appendChild(todoLi)
}

let pullworkout = new Todo('Pull', 'Back, Biceps, Sqaut, Deadlift', 'High')
let pushworkout = new Todo('Push', 'Chest, Triceps, Sqaut, Press', 'High')

addTodo(pullworkout)
addTodo(pushworkout)

// allTodos.forEach((e) => {
//   createTodoListItem(e)
// })

const addAllTodos = (todoArr) => {
  todoArr.forEach((e) => {
    createTodoListItem(e)
  })
}

//addAllTodos(allTodos)

//createTodoListItem(workout)

newTodoBtn.addEventListener('click', (e) => {
  todoForm.style.display = 'grid'
  displayTodos.style.display = 'none'
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
  clearTodos()
  addAllTodos(allTodos)
  todoForm.style.display = 'none'
  displayTodos.style.display = 'grid'
})

// console.log(workout.title)
//console.log(...allTodos)

//create function for adding creating to-do element

//function to remove todo

//function to edit todo

// function for poopulating page with all the todos

// project functionality

// date-fns

// styling

//

{
  /* <li class="todoListItem">
<div class="checkIcon">Icon</div>
<p class="todoTitle">Title</p>
<p class="todoDescription">Description</p>
<p class="todoPriority">Priority</p> */
}
