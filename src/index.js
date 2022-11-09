import './main.css'
import { format } from 'date-fns'

import elementFactory from './helpers/factoryFunctions/elementFactory';
import todoElementFactory from './helpers/factoryFunctions/todoElementFactory';
import projectElementFactory from './helpers/factoryFunctions/projectElementFactory';
// import createTodoListItem from './helpers/factoryFunctions/createTodoListItem';
import createProjectListItem from './helpers/factoryFunctions/createProjectListItem';

import dom from './helpers/dom';

import navBar from './pages/navbar';
import sideBar from './pages/sidebar';
import todoForm from './pages/todoFormContainer';
// import displayTodosComponent from './pages/displayTodos';

// Date Functions

import {updateTodaysDate, formatDate} from './helpers/dates/dateHelpers';


import displayAllTodosContainer from './pages/displayAllTodosContainer';


navBar();
sideBar();
todoForm();
displayAllTodosContainer()



console.log('just todo it!')



let today = format(new Date(), 'E-do')



addProjectButton.addEventListener('click', (e) => {
  console.log('DELETE!!!')
  clearPage();
})




console.log(projectsList)

function clearProjectList() {
  while(projectsList.lastChild) {
    projectsList.removeChild(projectsList.lastChild)
  }
}



homeIcon.addEventListener('click', (e) => {
  clearPage();
  displayAllTodosContainer();
  clearProjectList();
  allProjects.forEach((e) => {
    createProjectListItem(e)
  })
  
  if(allLocalStorageTodos !== null) {          //----------------displayAllLocal todos
    displayAllTodos(allLocalStorageTodos)
  }

  addTodoIds();
})

console.log(projectSelect)

function addProjectOption(project) {
  let option = document.createElement('option');
  option.setAttribute('value', project.title);
  option.appendChild(document.createTextNode(project.title));

  projectSelect.appendChild(option)
}

let dateReturn = '2022 - 10 - 20'

const mainElement = document.querySelector('main');


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



function clearForm() {
  titleInput.value = ''
  descrInput.value = ''
  prioritySelect.value = ''
}

function clearTodos() {
  const todoList = document.querySelector('.todoList')
  while (todoList.lastChild) {
    todoList.removeChild(todoList.lastChild)
  }
}


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


function addTodoIds() {
  const todoListItems = document.querySelectorAll('.todoListItem');

  todoListItems.forEach((e,i) => {
    e.setAttribute('id', `${i}`)
  })
}

clearPage();

displayAllTodosContainer();  
const displayTodos = document.querySelector('.displayTodos')

console.log(displayTodos)

if(displayTodos !== null) {

  allProjects.forEach((e) => {
    createProjectListItem(e)
  })
  
  if(allLocalStorageTodos !== null) {          //----------------displayAllLocal todos
    displayAllTodos(allLocalStorageTodos)
  }

  addTodoIds();

}

function clearPage() {
  while(mainElement.childElementCount > 1) {
    mainElement.removeChild(mainElement.lastChild);
  
}
}

console.log(mainElement.childElementCount)





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

// addTodoIds();

console.log('ALL TODOS',allLocalStorageTodos)

// console.log(JSON.stringify(allTodos))
// console.log(JSON.stringify(allProjects))


showHideProject.addEventListener('click', (e) => {
  // console.log('expand!!!!')
  e.preventDefault();

  if(projectsList.style.opacity === '0.5') {
    // projectsList.style.opacity = 'grid'
    expandIcon.innerText = 'expand_more'
    projectsList.style.opacity = '1';
   // projectsList.style.visibility = 'visible';
    projectsList.classList.add('showProjectList')
  } else {
    projectsList.classList.remove('showProjectList')
    projectsList.style.opacity = '0.5'
    //projectsList.style.visibility = 'hidden';

    //projectsList.style.display = 'none';
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
