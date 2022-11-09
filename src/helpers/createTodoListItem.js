
import elementFactory from './factoryFunctions/elementFactory';

import clearTodos from './clearTodos';
import dom from './dom'



function createTodoListItem(todo) {

    const todoList = dom.todoList();
  
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