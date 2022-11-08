//import { add } from 'date-fns';
import elementFactory from '../helpers/factoryFunctions/elementFactory';



const sideBar = function sideBarComponent() {

    const sidebar = elementFactory('div', {class: 'sidebar',style: "visibility: hidden"});
        const projectsContainer = elementFactory('section', {class: "projectsContainer"});
            const projectsHeaderContainer = elementFactory('div', {class: "projectsHeaderContainer"});
                const projectsHeader = elementFactory('header', {class: "projectsHeader"}, "Projects");
                const projectButtonsContainer = elementFactory('div', {class: "projectButtonsContainer"});
                    const addProjectButton = elementFactory('button', {class: "addProjectButton"});
                        const addIcon = elementFactory('span', {class: "material-symbols-outlined addIcon"}, "add");
                    const showHideProjects = elementFactory('button', {class: "showHideProjects"});
                        const expandIcon = elementFactory('span', {class: "material-symbols-outlined expandIcon"}, "chevron_left");
        const projectsListContainer = elementFactory('div', {class: "projectsListContainer"});
            const projectsList = elementFactory('ul', {class:"projectsList", style: "opacity : 0.5" });

    
    sidebar.appendChild(projectsContainer);
     projectsContainer.appendChild(projectsHeaderContainer);
        projectsHeaderContainer.appendChild(projectsHeader);
        projectsHeaderContainer.appendChild(projectButtonsContainer);
         projectButtonsContainer.appendChild(addProjectButton);
            addProjectButton.appendChild(addIcon);
         projectButtonsContainer.appendChild(showHideProjects);
            showHideProjects.appendChild(expandIcon);
     projectsContainer.appendChild(projectsListContainer);
        projectsListContainer.appendChild(projectsList);
    
    document.body.appendChild(sidebar);
    
}

export default sideBar






