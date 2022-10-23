import { format } from 'date-fns'

import elementFactory from '../helpers/factoryFunctions/elementFactory';
import {updateTodaysDate, formatDate} from '../helpers/dates/dateHelpers';

//import todoElementFactory from '../helpers/factoryFunctions/todoElementFactory';


// let today = format(new Date(), 'E-do')
// const todaysDateDisplay = document.querySelector('.todaysDate')


function displayAllTodosContainer() {

    const mainElement = document.querySelector('main');

    const displayTodosContainer = 
        elementFactory('div', {class: 'displayTodos'},
            elementFactory('div', {class: 'todayDateContainer'},
                elementFactory('header', {class:'today'}, 'Today'),
                elementFactory('header', {class:'todaysDate'})
                ),
            elementFactory('section', {class: "todoListContainer"},
                elementFactory('ul', {class:'todoList'})        
        )
    )

    mainElement.appendChild(displayTodosContainer);
    updateTodaysDate()

}

export default displayAllTodosContainer


    //  <div class="displayTodos">
    //   <div class="todayDateContainer">
    //     <header class="today">Today</header>
    //     <header class="todaysDate"></header>
    //   </div>
    //   <section class="todoListContainer">
    //     <ul class="todoList"></ul>
    //   </section>
    //  </div>

    //-------------- whats needed


    // if(allLocalStorageTodos !== null) {          //----------------displayAllLocal todos
    //     displayAllTodos(allLocalStorageTodos)
    //   }

    // const displayAllTodos = (todoArr) => {
    //     todoArr.forEach((e) => {
    //       createTodoListItem(e)
    //     })
    //   }

    // function createTodoListItem(todo) {

    //     const todoList = document.querySelector('.todoList')
      
    //     let todoLi = todoElementFactory(todo, 'li', { class: 'todoListItem' })
    //     let checkIcon = todoElementFactory(todo, 'div', { class: 'checkIcon' })
    //     let todoTitle = todoElementFactory(todo, 'p', { class: 'todoTitle' }, 'title')
    //     let todoDescription = todoElementFactory(
    //       todo,
    //       'p',
    //       { class: 'todoDescription' },
    //       'description'
    //     )
    //     let todoPriority = todoElementFactory(
    //       todo,
    //       'p',
    //       { class: 'todoPriority', class: `${todo.priority.split(': ')[1]}` },
    //       'priority'
    //     )
    //     let todoDate = todoElementFactory(todo, 'p', { class: 'todoDate' }, 'date')
    //     let todoProject = todoElementFactory(todo, 'p', {class: 'todoProject'}, 'project')
      
    //     // checkIcon.innerHTML = 'Icon'
      
    //     let tickIcon =elementFactory('span', {class: 'material-symbols-outlined tick'}, 'done');
      
    //       checkIcon.addEventListener('click', (e) => {
    //         let index = checkIcon.closest('li').id;
    //         console.log(allLocalStorageTodos)
      
    //         allLocalStorageTodos.splice(index, 1);
      
    //         localStorage.setItem('allTodos', JSON.stringify(allLocalStorageTodos))
    //         clearTodos();
    //         displayAllTodos(allLocalStorageTodos)
        
    //       })
      
      
    //     checkIcon.addEventListener('mouseenter', (e) => {
          
    //         console.log('CHECKED!!!!!!!!!!!!')
    //         checkIcon.appendChild(tickIcon)
    //     })
    //     checkIcon.addEventListener('mouseout', (e) => {
        
    //       if(e.relatedTarget.className === 'todoListItem') {
    //         checkIcon.removeChild(checkIcon.lastChild);
    //       }
          
    //     })