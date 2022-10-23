import './main.css'
import { format } from 'date-fns'

//Helper Functions

import elementFactory from './helpers/factoryFunctions/elementFactory';
import todoElementFactory from './helpers/factoryFunctions/todoElementFactory';
import projectElementFactory from './helpers/factoryFunctions/projectElementFactory';
// import createTodoListItem from './helpers/factoryFunctions/createTodoListItem';
import createProjectListItem from './helpers/factoryFunctions/createProjectListItem';

// Date Functions

import {updateTodaysDate, formatDate} from './helpers/dates/dateHelpers';
  



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

// const newTodoBtn = document.querySelector('.newTodoButton')
const newTodoWrapper = document.querySelector('.newTodoWrapper');


const todoForm = document.querySelector('.todoForm')
const titleInput = document.querySelector('#titleInput')
const descrInput = document.querySelector('#descriptionInput')
const prioritySelect = document.querySelector('#prioritySelect')

//Date

let today = format(new Date(), 'E-do')

const sidebar = document.querySelector('.sidebar');

// Priority options

  // const lowPriority = document.querySelector('.low');
  // const mediumPriority = document.querySelector('.medium');
  // const highPriority = document.querySelector('.high');

const allTodoPrioritys = document.querySelectorAll('.todoPriority')



// const addTodoBtn = document.querySelector('.addTodoButton')
// const cancelTodoButton = document.querySelector('.cancelTodoButton')

const addTodoWrapper = document.querySelector('.addTodoWrapper');
const cancelTodoWrapper = document.querySelector('.cancelTodoWrapper');

const displayTodos = document.querySelector('.displayTodos')
const todoList = document.querySelector('.todoList')



const formContainer = document.querySelector('.formContainer')

const dateSelect = document.querySelector('#dateSelect')
const projectSelect = document.querySelector('#projectsFormSelect');

//Projects sidbar

const projectsList = document.querySelector('.projectsList')
// const addProjectButton = document.querySelector('.addProjectButton')
const showHideProject = document.querySelector('.showHideProjects')

const projectsContainer = document.querySelector('.projectsContainer')

// Icons =================

const homeIcon = document.querySelector('.homeIcon');
const hamIcon = document.querySelector('.hamIcon')
const expandIcon = document.querySelector('.expandIcon')
// const addIcon = document.querySelector('.addIcon')

// expandIcon.innerText = 'chevron_left'


console.log(projectSelect)

function addProjectOption(project) {
  let option = document.createElement('option');
  option.setAttribute('value', project.title);
  option.appendChild(document.createTextNode(project.title));

  projectSelect.appendChild(option)
}

let dateReturn = '2022 - 10 - 20'

// LOCAL STORAGE ------------------------------------------------

//Variable to string coverter

// function variableToString(varKey) {
//   return Object.keys(varKey)[0]
// }

// function storeToLocalStorage(variable) {

//   localStorage.setItem(, JSON.stringify(variable));
// }

updateTodaysDate(today) //---------------------------------------today ----------------------------------

//console.log(today)

// console.log(todoList)

// console.log(todoForm)

// Arrays ===========================================

const allTodos = []
const allProjects = []

// MAY HAVE TO CHANGE CONST TO LET ------------------------------------

const allLocalStorageTodos = JSON.parse(localStorage.getItem('allTodos'));



if(allLocalStorageTodos === null) {
  let arr = [];
  localStorage.setItem('allTodos',JSON.stringify(arr));
}

console.log(allLocalStorageTodos)



// console.log(prioritySelect)

function Todo(title, description, priority, date, project) {
  this.title = title
  this.description = description
  this.priority = `Priority: ${priority}`
  this.date = date
  this.project = `Project: ${project}`
}

function Project(title, color) {
  this.title = title
  this.color = color

  this.tasks = []
}

function addTodo(todo) {
  allTodos.push(todo)
}

function addProject(project) {
  allProjects.push(project)
}

function createTodoListItem(todo) {

  const todoList = document.querySelector('.todoList')

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

  let tickIcon =elementFactory('span', {class: 'material-symbols-outlined tick'}, 'done');

    checkIcon.addEventListener('click', (e) => {
      let index = checkIcon.closest('li').id;
      console.log(allLocalStorageTodos)

      allLocalStorageTodos.splice(index, 1);

      localStorage.setItem('allTodos', JSON.stringify(allLocalStorageTodos))
      clearTodos();
      displayAllTodos(allLocalStorageTodos)
  
    })


  checkIcon.addEventListener('mouseenter', (e) => {
    
      console.log('CHECKED!!!!!!!!!!!!')
      checkIcon.appendChild(tickIcon)
  })
  checkIcon.addEventListener('mouseout', (e) => {
  
    if(e.relatedTarget.className === 'todoListItem') {
      checkIcon.removeChild(checkIcon.lastChild);
    }
    
  })

//     <span class="material-symbols-outlined">
// done
// </span>

  todoLi.appendChild(checkIcon)
  todoLi.appendChild(todoTitle)
  todoLi.appendChild(todoDescription)
  todoLi.appendChild(todoPriority)
  todoLi.appendChild(todoDate)
  todoLi.appendChild(todoProject)

  todoList.appendChild(todoLi)
}

const getFit = new Project('Get Fit', 'blue')
const readBooks = new Project('Read Books', 'yellow')

getFit.tasks.push({ title: 'Push', description: 'Chest', priority: 'High' })
readBooks.tasks.push({
  title: 'Gormenghast',
  description: 'Mervyn Peake, 1700 pages',
  priority: 'High',
})

addProject(getFit)
addProject(readBooks)

// allProjects.forEach((e) => {
//   console.log(e)
//   console.log(...e.tasks)
// })

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


// function createProjectListItem(project) {
//   let projectLi = projectElementFactory(project, { class: 'project-li' })
//   projectsList.appendChild(projectLi)
// }

allProjects.forEach((e) => {
  createProjectListItem(e)
})

function storeTodo (todo) {

    allLocalStorageTodos.push(todo);
    // localStorage.removeItem('allTodos');
    localStorage.setItem('allTodos', JSON.stringify(allLocalStorageTodos));
}

function removeTodo(index) {

}


// const storeAllTodos = (todoArr) => {
//   localStorage.removeItem('allTodos');
//   localStorage.setItem('allTodos', JSON.stringify(todoArr));
// }
console.log(allLocalStorageTodos)

const displayAllTodos = (todoArr) => {
  todoArr.forEach((e) => {
    createTodoListItem(e)
  })
}

//addAllTodos(allTodos)

if(allLocalStorageTodos !== null) {          //----------------displayAllLocal todos
    displayAllTodos(allLocalStorageTodos)
  }



// console.log(allTodos)

//add id's to todoListItems

function addTodoIds() {
  const todoListItems = document.querySelectorAll('.todoListItem');

  todoListItems.forEach((e,i) => {
    e.setAttribute('id', `${i}`)
  })
}

// todoListItems.forEach((e,i) => e.setAttribute('id', `${i}`))
//createTodoListItem(workout)


//------------------- EVENT LISTENERS -----------------------------------------------------------------------

newTodoWrapper.addEventListener('click', (e) => {
  // console.log(dateSelect.value)
  if(todoForm.style.display === 'none' && formContainer.style.display === 'none')  {
    todoForm.style.display = 'grid'
    formContainer.style.display = 'grid'
  } else {
    todoForm.style.display = 'none'
    formContainer.style.display = 'none'
  }
  // dateSelect.value = ''

  // displayTodos.style.display = 'none'
})

cancelTodoWrapper.addEventListener('click', (e) => {
  e.preventDefault()
  // console.log('cancel')
  clearForm()
  todoForm.style.display = 'none'
  formContainer.style.display = 'none'
})

addTodoWrapper.addEventListener('click', (e) => {
  e.preventDefault()

  let title = titleInput.value
  let description = descrInput.value
  let priority = prioritySelect.value
  let date = formatDate(dateSelect.value)
  let project = projectSelect.value

  //let storedTodos = JSON.parse(localStorage.getItem('allTodos'));
  // console.log()
  // console.log('addddddd')
  let todo = new Todo(title, description, priority, date, project)
  addTodo(todo)
  // console.log(allTodos)
  // console.log(dateSelect.value)
  // console.log('format', formatDate(dateSelect.value))
  // console.log(typeof dateSelect.value)
  clearForm()
  clearTodos()
  // storeAllTodos(allTodos)
  storeTodo(todo)
  const allLocalStorageTodos = JSON.parse(localStorage.getItem('allTodos'));
  console.log('ALL TODOS',allLocalStorageTodos)

  displayAllTodos(allLocalStorageTodos)

  todoForm.style.display = 'none'
  formContainer.style.display = 'none'
  displayTodos.style.display = 'grid'
})

allProjects.forEach((project) => {
  addProjectOption(project)
})

// allTodoPrioritys.forEach((e) => {
//   console.log(e);
// })

addTodoIds();

console.log('ALL TODOS',allLocalStorageTodos)

// console.log(JSON.stringify(allTodos))
// console.log(JSON.stringify(allProjects))


showHideProject.addEventListener('click', (e) => {
  // console.log('expand!!!!')
  e.preventDefault();
  if(projectsList.style.display === 'none') {
    projectsList.style.display = 'grid';
    expandIcon.innerText = 'expand_more'
  } else {
    projectsList.style.display = 'none'
    expandIcon.innerText = 'chevron_left'
  }
  

})

homeIcon.addEventListener('click', (e) => {
  // console.log('home!!!!!!!!!')
})

hamIcon.addEventListener('click', (e) => {
  // console.log(sidebar.style.visibility);
  if(sidebar.style.visibility === 'visible') {
    
    sidebar.setAttribute('class','sidebar');
    sidebar.style.visibility = 'hidden';
  } else {
    sidebar.setAttribute('class', 'sidebar open')
    
    sidebar.style.visibility = 'visible';
  }
  // console.log('ham!!!!!!!!!');
  
})



// export default createTodoListItem

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
