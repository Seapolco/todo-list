/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var _console;
console.log('just todo it!');

// create factory function for generating to-do
//      title, description, date, priority, (notes & checklist)

var newTodoBtn = document.querySelector('.newTodoButton');
var todoForm = document.querySelector('.todoForm');
var titleInput = document.querySelector('#titleInput');
var descrTextArea = document.querySelector('#descriptionTextArea');
var prioritySelect = document.querySelector('#prioritySelect');
var addTodoBtn = document.querySelector('.addTodoButton');
var allTodos = [];
console.log(prioritySelect);
function Todo(title, description, priority) {
  this.title = title;
  this.description = description;
  this.priority = priority;
}
function addTodo(todo) {
  allTodos.push(todo);
}
function clearForm() {
  titleInput.value = '';
  descrTextArea.value = '';
  prioritySelect.value = '';
}
var workout = new Todo('Pull', 'Back, Biceps, Sqaut, Deadlift', 'High');
addTodo(workout);
addTodoBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var title = titleInput.value;
  var description = descrTextArea.value;
  var priority = prioritySelect.value;
  console.log('addddddd');
  var todo = new Todo(title, description, priority);
  addTodo(todo);
  console.log(allTodos);
  clearForm();
});
console.log(workout);
(_console = console).log.apply(_console, allTodos);

//create function for adding creating to-do element

//function to remove todo

//function to edit todo

// function for poopulating page with all the todos

// project functionality

// date-fns

// styling

//
/******/ })()
;
//# sourceMappingURL=todoBundleda3030d7bb36eeb477ba.js.map