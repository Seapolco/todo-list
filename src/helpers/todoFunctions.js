
import getLocalStorage from './getLocalStorage';


const todoFunctions = function todoHelperFunctions() {

    const allTodos = [];
    const allLocalStorageTodos = getLocalStorage();

    const Todo = function TodoContstructor(title, description, priority, date, project) {
        this.title = title
        this.description = description
        this.priority = `Priority: ${priority}`
        this.date = date
        this.project = `Project: ${project}`
      }
      
    const Project = function ProjectConstructor(title, color) {
        this.title = title
        this.color = color
      
        this.tasks = []
      }

    const addTodo = function(todo) {
        allTodos.push(todo)
      }

    const storeTodo = function(todo) {

        allLocalStorageTodos.push(todo);
        // localStorage.removeItem('allTodos');
        localStorage.setItem('allTodos', JSON.stringify(allLocalStorageTodos));
    }
      
    







}