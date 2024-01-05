class todoListRepository {
    constructor() {
        this.todoLists = []
    }

    createList(name) {
        this.todoLists.push(new todoList(name))
    }

    deleteList(listIndex = this.todoLists.length) {
        this.todoLists.splice(listIndex, 1)
    }

    getTodoList(listIndex) {
        return this.todoLists[listIndex]
    }
}

class todoList {
    constructor(name) {
        this.name = name
        this.todoItemList = []
    }

    createTask(title, description, priority, dueDate) {
        let newTask = {title, description, priority, dueDate}
        this.todoItemList.push(newTask)
        return newTask
    }

    deleteTask(itemIndex = this.length) {
        this.todoItemList.splice(itemIndex, 1)
    }

    get length() {
        return this.todoItemList.length
    }

    getTodoList() {
        return this.todoItemList
    }
}

export {todoListRepository, todoList}