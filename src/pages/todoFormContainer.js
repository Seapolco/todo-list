
import elementFactory from '../helpers/factoryFunctions/elementFactory';



const todoForm = function todoFormComponent() {

    //, style : 'display: none'

    const main = elementFactory('main', {});


    const formContainer = elementFactory('div', {class: 'formContainer'});
        const todoForm = elementFactory('form', {class: 'todoForm'});
            const titleDescriptionWrapper = elementFactory('div', {class: 'titleDescriptionWrapper'});
                const title = elementFactory('div', {class: 'title'});
                    const titleInput = elementFactory('input', {id: 'titleDescriptionWrapper', type: 'text', placeholder: 'Task'});
                const description = elementFactory('div', {class: 'description'});
                    const descriptionInput = elementFactory('input', {id: 'descriptionInput', name: 'description', placeholder: 'Description'});

            const datePriorityWrapper = elementFactory('div', {class: 'datePriorityWrapper'});
                const date = elementFactory('div', {class: 'date'});
                    const dateSelect = elementFactory('input', {id: 'dateSelect', type: 'date', format:"dd-MMM-yyyy"});
                const prioritySelectWrappper = elementFactory('div', {class: 'prioritySelectWrapper'});
                    const prioritySelectLabel = elementFactory('label', {for: 'prioritySelect'});
                        const flagIcon = elementFactory('span', {class: "material-symbols-outlined"}, "flag");
                    const prioritySelect = elementFactory('select', {id: "prioritySelect"});
                        const optionLow = elementFactory('option', {class: "low", value: 'Low'}, "Low");
                        const optionMedium = elementFactory('option', {class: "medium", value: 'Medium'}, "Medium");
                        const optionHigh = elementFactory('option', {class: "high", value: 'High'}, "High");
             
            const projectsFormWrapper = elementFactory('div', {class: "priojectsFormWrapper"});
                const projectsFormLabel = elementFactory('label', {for: "priojectsFormSelect"})
                    const listIcon = elementFactory('span', {class: "material-symbols-outlined"}, "list_alt");
            const todoFormButtonWrapper = elementFactory('div', {class: "todoFormButtonWrapper"});
                const cancelTodoWrapper = elementFactory('div', {class: "cancelTodoWrapper"});
                    const cancelTodoButton = elementFactory('button', {class: "cancelTodoButton"}, "Cancel");
                const addTodoWrapper = elementFactory('div', {class: "addTodoWrapper"});
                    const addTodoButton = elementFactory('button', {class: "addTodoButton"}, "Add");


    formContainer.appendChild(todoForm);
        todoForm.appendChild(titleDescriptionWrapper);
            titleDescriptionWrapper.appendChild(title);
                title.appendChild(titleInput);
            titleDescriptionWrapper.appendChild(description);
                description.appendChild(descriptionInput);
        todoForm.appendChild(datePriorityWrapper);
            datePriorityWrapper.appendChild(date);
                date.appendChild(dateSelect);
            datePriorityWrapper.appendChild(prioritySelectWrappper);
                prioritySelectWrappper.appendChild(prioritySelectLabel);
                    prioritySelectLabel.appendChild(flagIcon);
                prioritySelectWrappper.appendChild(prioritySelect);
                    prioritySelect.appendChild(optionLow);
                    prioritySelect.appendChild(optionMedium);
                    prioritySelect.appendChild(optionHigh);
        todoForm.appendChild(projectsFormWrapper);
            projectsFormWrapper.appendChild(projectsFormLabel);
                projectsFormLabel.appendChild(listIcon);
        todoForm.appendChild(todoFormButtonWrapper);
            todoFormButtonWrapper.appendChild(cancelTodoWrapper);
                cancelTodoWrapper.appendChild(cancelTodoButton);
            todoFormButtonWrapper.appendChild(addTodoWrapper);
                addTodoWrapper.appendChild(addTodoButton);

    main.appendChild(formContainer);

    document.body.appendChild(main);

}

export default todoForm;
