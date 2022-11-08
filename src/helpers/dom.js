const dom = function domQuerySelectors() {

const newTodoWrapper = () => document.querySelector('.newTodoWrapper');


const todoForm = () => document.querySelector('.todoForm');
const titleInput = () => document.querySelector('#titleInput');
const descrInput = () => document.querySelector('#descriptionInput');
const prioritySelect = () => document.querySelector('#prioritySelect');

const sidebar = () => document.querySelector('.sidebar');

const allTodoPrioritys = () => document.querySelectorAll('.todoPriority');

const addTodoWrapper = () => document.querySelector('.addTodoWrapper');
const cancelTodoWrapper = () => document.querySelector('.cancelTodoWrapper');

const todoList = () => document.querySelector('.todoList');



const formContainer = () => document.querySelector('.formContainer');

const dateSelect = () => document.querySelector('#dateSelect');
const projectSelect = () => document.querySelector('#projectsFormSelect');

const projectsList = () => document.querySelector('.projectsList');
const showHideProject = () => document.querySelector('.showHideProjects');
const addProjectButton = () => document.querySelector('.addProjectButton');


const projectsContainer = () => document.querySelector('.projectsContainer');


const homeIcon = () => document.querySelector('.homeIcon');
const hamIcon = () => document.querySelector('.hamIcon');
const expandIcon = () => document.querySelector('.expandIcon');

return {
    newTodoWrapper,
    todoForm,
    titleInput,
    descrInput,
    prioritySelect,
    sidebar,
    allTodoPrioritys,
    addTodoWrapper,
    cancelTodoWrapper,
    todoList,
    formContainer,
    dateSelect,
    projectSelect,
    projectsList,
    showHideProject,
    addProjectButton,
    projectsContainer,
    homeIcon,
    hamIcon,
    expandIcon
}

}

export default dom