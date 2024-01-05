import {todoListRepository, todoList} from "./todoObjects.js"
import makeTaskCard from "./makeTaskCard.js"
import displayTodoList from "./displayTodoList.js"
import {getTaskInput, clearInput} from "./createTask.js"

let todoListNode = document.querySelector('.todoList')
let myList = new todoList('First todo')
let testTasks = [['Chores', 'do', 'low', 'dec122022'], 
    ['Floors', 'do', 'low', 'dec122023'], 
    ['Clothes', 'do', 'low', 'dec122024']]

testTasks.forEach( elem => {
    myList.createTask(elem[0], elem[1], elem[2], elem[3])
})

displayTodoList(myList, todoListNode)
const TASK_INPUT_SELECTORS = ['input[name="title"]', 'textarea[name="description"]', 'select[name="priority"]', 'input[name="dueDate"]']


const newTaskBtn = document.querySelector(".newTaskBtn")
const taskPrompt = document.querySelector(".createTaskPrompt")
const addTaskBtn = document.querySelector(".addTaskBtn")
const cancelTaskBtn = document.querySelector(".cancelTaskBtn")

newTaskBtn.addEventListener('click', () => taskPrompt.showModal())

addTaskBtn.addEventListener('click', () => {
        let newTaskInput = getTaskInput(TASK_INPUT_SELECTORS, ".createTaskPrompt")
        myList.createTask(...newTaskInput)
        clearInput(TASK_INPUT_SELECTORS, ".createTaskPrompt")
        displayTodoList(myList, todoListNode)
        taskPrompt.close()
    }
)
cancelTaskBtn.addEventListener('click', () => taskPrompt.close())

