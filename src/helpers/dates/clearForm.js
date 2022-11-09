import dom from '../dom'


function clearForm() {

    let titleInput = dom.titleInput();
    let descrInput = dom.descrInput();
    let prioritySelect = dom.prioritySelect();

    titleInput.value = ''
    descrInput.value = ''
    prioritySelect.value = ''
  }

  