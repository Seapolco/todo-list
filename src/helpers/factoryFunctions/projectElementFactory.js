function projectElementFactory(project, attributes) {
    let element = document.createElement('li')
  
    let colorIcon = document.createElement('div');
    colorIcon.style.backgroundColor = project.color;
  
    for (let key in attributes) {
      element.setAttribute(key, attributes[key])
    }
  
    // add check to see if string, if so just append string as text node
    element.appendChild(colorIcon)
  
    element.appendChild(document.createTextNode(project.title))
  
    return element
}

export default projectElementFactory