


const getLocalStorage = function getAllLocalStorageTodos() {
    const allLocalStorageTodos = JSON.parse(localStorage.getItem('allTodos'));
    if(allLocalStorageTodos === null) {
        let arr = [];
        localStorage.setItem('allTodos',JSON.stringify(arr));
      }

    return allLocalStorageTodos
}

export default getLocalStorage