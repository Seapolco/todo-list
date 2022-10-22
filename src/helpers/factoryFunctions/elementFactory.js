function elementFactory(type, attributes, ...children) {
    const element = document.createElement(type);

    if(attributes) {
        for(let key in attributes) {
            element.setAttribute(key, attributes[key])
        }
    }
    if(children) {
        children.forEach((e) => {
            if(typeof e === 'string') {
                element.appendChild(document.createTextNode(e))
            }
        })
    }

    return element
}

export default elementFactory