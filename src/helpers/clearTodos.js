
import dom from './dom';


function clearTodos() {
    const todoList = dom.todoList();
    while (todoList.lastChild) {
      todoList.removeChild(todoList.lastChild)
    }
}

export default clearTodos();
