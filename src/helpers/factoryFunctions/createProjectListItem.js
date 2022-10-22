import projectElementFactory from "./projectElementFactory"

function createProjectListItem(project) {
    const projectsList = document.querySelector('.projectsList');

    let projectLi = projectElementFactory(project, { class: 'project-li' })
    projectsList.appendChild(projectLi)

  }

  export default createProjectListItem