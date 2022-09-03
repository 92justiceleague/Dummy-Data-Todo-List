let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    console.log('test')
    createArrayList()
}

function createArrayList() {
    let element = document.queryselector('.todo-list')
    
    arrayResults.forEach(arrayResults => {
        let liTag = document.createElement('li')
        liTag.innerText = arrayResults.title
        element.appendChild(liTag)
    })
}

function filterByID () {
    console.log("Test Button")
    let SelectID = document.queryselector(#idList).value
    let filteredID = arrayResults.filter(arrayResult => {
        console.log('ID Filter:', arrayResult)
        console.log(arrayResult.userId == SelectID)
    })
    setFilteredList(filteredID)
}

function setFilteredList (filteredResults) {
    console.log(filteredResults)
    let element = document.querySelector('.todo-list')
    element.innerHTML = ''
    filteredResults.forEach(arrayResult => {
        let liTag = document.createElement('li')
        liTag.innerText = arrayResult.title
        element.appendChild(liTag);
    })
}


