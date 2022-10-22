function todoElementFactory(todo, type, attributes, ...children) {
    let element = document.createElement(type)
  
    for (let key in attributes) {
      element.setAttribute(key, attributes[key])
    }
  
    // add check to see if string, if so just append string as text node
  
    if(children) {
      children.forEach(child => {
          if (typeof child === 'string') {
            element.appendChild(document.createTextNode(todo[child]))
          } else {
            element.appendChild(child)
          }
        })
  }
    return element
  }

  export default todoElementFactory