import makeTaskCard from "./makeTaskCard.js"

function displayTodoList(todoList, container) {
    // makeTaskCard fr. contents of todoList
    container.textContent = ''
    let tasks = todoList.getTodoList()

    tasks.forEach(task => {
        let newTaskCard = makeTaskCard(task)
        container.appendChild(newTaskCard)
    });

}

export default displayTodoList