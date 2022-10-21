import './main.css'

import { format } from 'date-fns'

console.log('just todo it!')

// TO DO -------------------------------------------------------------------------------

//refactor
// pages folder for page modules
//modules for helper functions
//genberally clear out the index page

//General

// DELETE TODOS!!!!!!

// show hide sidebar button

//homepage button

// create factory function for generating to-do
//      title, description, date, priority, (notes & checklist)

// Add projects (object or array)

// add project option to addTodoForm!!!
//select drop down populated with the list items of project list

// show projects in sidebar

// add project page
// dynmically create html for pages
//load homepage on load and load project page when required -- see restaurant app.
//add fs storage

// DATE AND TIME

// add more complex date functionality
// make the date red only if it is todays date
// maybe change color from orange to green depending on impending it is
//add some overdue functionality
//otherwise make the date green.

//have some sort of calendar where you can see what todos are coming up

const newTodoBtn = document.querySelector('.newTodoButton')
const todoForm = document.querySelector('.todoForm')
const titleInput = document.querySelector('#titleInput')
const descrInput = document.querySelector('#descriptionInput')
const prioritySelect = document.querySelector('#prioritySelect')

// Priority options

  // const lowPriority = document.querySelector('.low');
  // const mediumPriority = document.querySelector('.medium');
  // const highPriority = document.querySelector('.high');

const allTodoPrioritys = document.querySelectorAll('.todoPriority')



const addTodoBtn = document.querySelector('.addTodoButton')
const cancelTodoButton = document.querySelector('.cancelTodoButton')

const displayTodos = document.querySelector('.displayTodos')
const todoList = document.querySelector('.todoList')



const formContainer = document.querySelector('.formContainer')

const todaysDateDisplay = document.querySelector('.todaysDate')

const dateSelect = document.querySelector('#dateSelect')
const projectSelect = document.querySelector('#projectsFormSelect');

console.log(projectSelect)

function addProjectOption(project) {
  let option = document.createElement('option');
  option.setAttribute('value', project.title);
  option.appendChild(document.createTextNode(project.title));

  projectSelect.appendChild(option)
}



//Projects sidbar

const projectsList = document.querySelector('.projectsList')
const addProjectButton = document.querySelector('.addProjectButton')
const showHideProject = document.querySelector('.showHideProjects')

console.log(dateSelect.value)

let dateReturn = '2022 - 10 - 20'

let today = format(new Date(), 'E-do')
console.log(today)

//DATE and DATE FORMATING ---------------------------------------------

function updateTodaysDate(today) {
  let todayArr = today.split('-')
  let todaysDate = `${todayArr[0]} ${todayArr[1]}`
  todaysDateDisplay.innerText = todaysDate
}

function formatDate(date) {
  let dateArr = date.split('-')
  let year = Number(dateArr[0])
  let month = Number(dateArr[1]) - 1
  let day = Number(dateArr[2])

  let newDate = new Date(year, month, day)
  let formattedDate = format(newDate, 'E-dd-MM-yyyy')
  //console.log(formattedDate)
  return formattedDate
}

// LOCAL STORAGE ------------------------------------------------

function variableToString(varKey) {
  return Object.keys(varKey)[0]
}

// function storeToLocalStorage(variable) {

//   localStorage.setItem(, JSON.stringify(variable));
// }

updateTodaysDate(today)

//console.log(today)

console.log(todoList)

console.log(todoForm)

// Arrays ===========================================

let allTodos = []
const allProjects = []

let allLocalStorageTodos = JSON.parse(localStorage.getItem('allTodos'));



console.log(prioritySelect)

function Todo(title, description, priority, date, project) {
  this.title = title
  this.description = description
  this.priority = `Priority: ${priority}`
  this.date = date
  this.project = `Project: ${project}`
}

function Project(title) {
  this.title = title

  this.tasks = []
}

function addTodo(todo) {
  allTodos.push(todo)
}

function addProject(project) {
  allProjects.push(project)
}

const getFit = new Project('Get Fit')
const readBooks = new Project('Read Books')

getFit.tasks.push({ title: 'Push', description: 'Chest', priority: 'High' })
readBooks.tasks.push({
  title: 'Gormenghast',
  description: 'Mervyn Peake, 1700 pages',
  priority: 'High',
})

addProject(getFit)
addProject(readBooks)

allProjects.forEach((e) => {
  console.log(e)
  console.log(...e.tasks)
})

function clearForm() {
  titleInput.value = ''
  descrInput.value = ''
  prioritySelect.value = ''
}

function clearTodos() {
  while (todoList.lastChild) {
    todoList.removeChild(todoList.lastChild)
  }
}

// need to split this function into multiple functions

function todoElementFactory(todo, type, attributes, content) {
  let element = document.createElement(type)

  for (let key in attributes) {
    element.setAttribute(key, attributes[key])
  }

  // add check to see if string, if so just append string as text node

  if (content) {
    element.appendChild(document.createTextNode(todo[content]))
  }

  return element
}

function projectElementFactory(project, attributes) {
  let element = document.createElement('li')

  for (let key in attributes) {
    element.setAttribute(key, attributes[key])
  }

  // add check to see if string, if so just append string as text node

  element.appendChild(document.createTextNode(project.title))

  return element
}

function createProjectListItem(project) {
  let projectLi = projectElementFactory(project, { class: 'project-li' })
  projectsList.appendChild(projectLi)
}

allProjects.forEach((e) => {
  createProjectListItem(e)
})

function createTodoListItem(todo) {
  let todoLi = todoElementFactory(todo, 'li', { class: 'todoListItem' })
  let checkIcon = todoElementFactory(todo, 'div', { class: 'checkIcon' })
  let todoTitle = todoElementFactory(todo, 'p', { class: 'todoTitle' }, 'title')
  let todoDescription = todoElementFactory(
    todo,
    'p',
    { class: 'todoDescription' },
    'description'
  )
  let todoPriority = todoElementFactory(
    todo,
    'p',
    { class: 'todoPriority', class: `${todo.priority.split(': ')[1]}` },
    'priority'
  )
  let todoDate = todoElementFactory(todo, 'p', { class: 'todoDate' }, 'date')
  let todoProject = todoElementFactory(todo, 'p', {class: 'todoProject'}, 'project')

  // checkIcon.innerHTML = 'Icon'

  todoLi.appendChild(checkIcon)
  todoLi.appendChild(todoTitle)
  todoLi.appendChild(todoDescription)
  todoLi.appendChild(todoPriority)
  todoLi.appendChild(todoDate)
  todoLi.appendChild(todoProject)

  todoList.appendChild(todoLi)
}

// let pullworkout = new Todo(
//   'Pull',
//   'Back, Biceps, Sqaut, Deadlift',
//   'High',
//   new Date(),
//   'Get Fit'
// )
// let pushworkout = new Todo(
//   'Push',
//   'Chest, Triceps, Sqaut, Press',
//   'Medium',
//   new Date(),
//   'Get Fit'
// )
// let legworkout = new Todo(
//   'Legs',
//   'Chest, Triceps, Sqaut, Press',
//   'Low',
//   new Date(),
//   'Get Fit'
// )


// addTodo(pullworkout)
// addTodo(pushworkout)
// addTodo(legworkout)

// allTodos.forEach((e) => {
//   createTodoListItem(e)
// })

const addAllTodos = (todoArr) => {
  localStorage.removeItem('allTodos');
  todoArr.forEach((e) => {
    createTodoListItem(e)
  })
  localStorage.setItem('allTodos', JSON.stringify(todoArr));
}

//addAllTodos(allTodos)

if(allLocalStorageTodos !== null) {
  addAllTodos(allLocalStorageTodos)
}



console.log(allTodos)

//add id's to todoListItems

function addTodoIds() {
  const todoListItems = document.querySelectorAll('.todoListItem');

  todoListItems.forEach((e,i) => {
    e.setAttribute('id', `${i}`)
  })
}

// todoListItems.forEach((e,i) => e.setAttribute('id', `${i}`))
//createTodoListItem(workout)

newTodoBtn.addEventListener('click', (e) => {
  console.log(dateSelect.value)

  dateSelect.value = ''
  todoForm.style.display = 'grid'
  formContainer.style.display = 'grid'
  // displayTodos.style.display = 'none'
})

cancelTodoButton.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('cancel')
  clearForm()
  todoForm.style.display = 'none'
  formContainer.style.display = 'none'
})

addTodoBtn.addEventListener('click', (e) => {
  e.preventDefault()

  let title = titleInput.value
  let description = descrInput.value
  let priority = prioritySelect.value
  let date = formatDate(dateSelect.value)
  let project = projectSelect.value


  console.log()
  console.log('addddddd')
  let todo = new Todo(title, description, priority, date, project)
  addTodo(todo)
  console.log(allTodos)
  console.log(dateSelect.value)
  console.log('format', formatDate(dateSelect.value))
  console.log(typeof dateSelect.value)
  clearForm()
  clearTodos()
  addAllTodos(allTodos)
  // if(priority === 'High') {
  //   highPriority.style.color = 'red';
  // } else if(priority === 'Medium') {
  //   mediumPriority.style.color = 'orange';
  // } else {
  //   lowPriority.style.color = 'slategrey'
  // }
  todoForm.style.display = 'none'
  formContainer.style.display = 'none'
  displayTodos.style.display = 'grid'
})

allProjects.forEach((project) => {
  addProjectOption(project)
})

allTodoPrioritys.forEach((e) => {
  console.log(e);
})

addTodoIds();

console.log(JSON.stringify(allTodos))
console.log(JSON.stringify(allProjects))

// localStorage.setItem('allTodos', JSON.stringify(allTodos))

// let localTodos = JSON.parse(localStorage.getItem('allTodos'))
// console.log('local', localTodos)

// localStorage.removeItem('allTodos');
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
