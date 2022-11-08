
// import { el } from "date-fns/locale";
import elementFactory from "../helpers/factoryFunctions/elementFactory";

const displayTodosComponent = function displayTodos() {

    const main = document.querySelector('main');

    const displayTodos = elementFactory('div', {class: 'displayTodos'});
        const todayDateContainer =  elementFactory('div', {class : "todayDateContainer"});
            const today = elementFactory('header', {class : "today"});
            const todaysDate =  elementFactory('header', {class : "todaysDate"});
        const todoListContainer =  elementFactory('section', {class : "todoListContainer"});
            const todoList =  elementFactory('ul', {class : "todoList"});
    
    displayTodos.appendChild(todayDateContainer);
        todayDateContainer.appendChild(today);
        todayDateContainer.appendChild(todaysDate);
    displayTodos.appendChild(todoListContainer);
        todoListContainer.appendChild(todoList);

    main.appendChild(displayTodos);




}

export default displayTodosComponent