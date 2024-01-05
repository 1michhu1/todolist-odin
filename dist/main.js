/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearInput: () => (/* binding */ clearInput),
/* harmony export */   getTaskInput: () => (/* binding */ getTaskInput)
/* harmony export */ });
function clearInput(selectorsToGet, selectorLocation) {
    for (let selector of selectorsToGet) {
        (document.querySelector(`${selectorLocation} ${selector}`)).value = ''
    }
}

function getTaskInput(selectorsToGet, selectorLocation) {
    //ig i should also clear task input?
    let taskInput = []
    for (let selector of selectorsToGet) {
        let value = (document.querySelector(`${selectorLocation} ${selector}`)).value
        taskInput.push(value)
    }

    return taskInput
}



/***/ }),

/***/ "./src/displayTodoList.js":
/*!********************************!*\
  !*** ./src/displayTodoList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _makeTaskCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeTaskCard.js */ "./src/makeTaskCard.js");


function displayTodoList(todoList, container) {
    // makeTaskCard fr. contents of todoList
    container.textContent = ''
    let tasks = todoList.getTodoList()

    tasks.forEach(task => {
        let newTaskCard = (0,_makeTaskCard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(task)
        container.appendChild(newTaskCard)
    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTodoList);

/***/ }),

/***/ "./src/makeTaskCard.js":
/*!*****************************!*\
  !*** ./src/makeTaskCard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeTaskCard(taskObj) {
    const CARD_STYLE = "taskCard"
    const CHECKBOX_DIV_STYLE = 'checkBoxContainer'

    // CREATE CONTAINERS AND CONTENT TAGS
    let cardContainer = document.createElement('div')
    let checkBoxDiv = document.createElement('div')
    let checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox')

    let contentDiv = document.createElement('div')
    for (let prop in taskObj) {
        let p = document.createElement('p') 
        p.textContent = `${prop}: ${taskObj[prop]}`
        contentDiv.appendChild(p)
    }

    // SET STYLING
    cardContainer.classList.add(CARD_STYLE)
    checkBox.classList.add(CHECKBOX_DIV_STYLE)

    // ADD TO CARD CONTAINER
    cardContainer.appendChild(checkBoxDiv.appendChild(checkBox))
    cardContainer.appendChild(contentDiv)
    return cardContainer
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeTaskCard);

/***/ }),

/***/ "./src/todoObjects.js":
/*!****************************!*\
  !*** ./src/todoObjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoList: () => (/* binding */ todoList),
/* harmony export */   todoListRepository: () => (/* binding */ todoListRepository)
/* harmony export */ });
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoObjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoObjects.js */ "./src/todoObjects.js");
/* harmony import */ var _makeTaskCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeTaskCard.js */ "./src/makeTaskCard.js");
/* harmony import */ var _displayTodoList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTodoList.js */ "./src/displayTodoList.js");
/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTask.js */ "./src/createTask.js");





let todoListNode = document.querySelector('.todoList')
let myList = new _todoObjects_js__WEBPACK_IMPORTED_MODULE_0__.todoList('First todo')
let testTasks = [['Chores', 'do', 'low', 'dec122022'], 
    ['Floors', 'do', 'low', 'dec122023'], 
    ['Clothes', 'do', 'low', 'dec122024']]

testTasks.forEach( elem => {
    myList.createTask(elem[0], elem[1], elem[2], elem[3])
})

;(0,_displayTodoList_js__WEBPACK_IMPORTED_MODULE_2__["default"])(myList, todoListNode)
const TASK_INPUT_SELECTORS = ['input[name="title"]', 'textarea[name="description"]', 'select[name="priority"]', 'input[name="dueDate"]']


const newTaskBtn = document.querySelector(".newTaskBtn")
const taskPrompt = document.querySelector(".createTaskPrompt")
const addTaskBtn = document.querySelector(".addTaskBtn")
const cancelTaskBtn = document.querySelector(".cancelTaskBtn")

newTaskBtn.addEventListener('click', () => taskPrompt.showModal())

addTaskBtn.addEventListener('click', () => {
        let newTaskInput = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_3__.getTaskInput)(TASK_INPUT_SELECTORS, ".createTaskPrompt")
        myList.createTask(...newTaskInput)
        ;(0,_createTask_js__WEBPACK_IMPORTED_MODULE_3__.clearInput)(TASK_INPUT_SELECTORS, ".createTaskPrompt")
        ;(0,_displayTodoList_js__WEBPACK_IMPORTED_MODULE_2__["default"])(myList, todoListNode)
        taskPrompt.close()
    }
)
cancelTaskBtn.addEventListener('click', () => taskPrompt.close())


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsbUNBQW1DLGtCQUFrQixFQUFFLFNBQVM7QUFDaEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQkFBa0IsRUFBRSxTQUFTO0FBQzVFO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDREQUFZO0FBQ3RDO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNkZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSyxJQUFJLGNBQWM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN6Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ042RDtBQUNqQjtBQUNNO0FBQ007O0FBRXhEO0FBQ0EsaUJBQWlCLHFEQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnRUFBZTtBQUNmOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQiw0REFBWTtBQUN2QztBQUNBLFFBQVEsMkRBQVU7QUFDbEIsUUFBUSxnRUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0LW9kaW4vLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1vZGluLy4vc3JjL2Rpc3BsYXlUb2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1vZGluLy4vc3JjL21ha2VUYXNrQ2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1vZGluLy4vc3JjL3RvZG9PYmplY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0LW9kaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0LW9kaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC1vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNsZWFySW5wdXQoc2VsZWN0b3JzVG9HZXQsIHNlbGVjdG9yTG9jYXRpb24pIHtcbiAgICBmb3IgKGxldCBzZWxlY3RvciBvZiBzZWxlY3RvcnNUb0dldCkge1xuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtzZWxlY3RvckxvY2F0aW9ufSAke3NlbGVjdG9yfWApKS52YWx1ZSA9ICcnXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRUYXNrSW5wdXQoc2VsZWN0b3JzVG9HZXQsIHNlbGVjdG9yTG9jYXRpb24pIHtcbiAgICAvL2lnIGkgc2hvdWxkIGFsc28gY2xlYXIgdGFzayBpbnB1dD9cbiAgICBsZXQgdGFza0lucHV0ID0gW11cbiAgICBmb3IgKGxldCBzZWxlY3RvciBvZiBzZWxlY3RvcnNUb0dldCkge1xuICAgICAgICBsZXQgdmFsdWUgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtzZWxlY3RvckxvY2F0aW9ufSAke3NlbGVjdG9yfWApKS52YWx1ZVxuICAgICAgICB0YXNrSW5wdXQucHVzaCh2YWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza0lucHV0XG59XG5cbmV4cG9ydCB7Z2V0VGFza0lucHV0LCBjbGVhcklucHV0fSIsImltcG9ydCBtYWtlVGFza0NhcmQgZnJvbSBcIi4vbWFrZVRhc2tDYXJkLmpzXCJcblxuZnVuY3Rpb24gZGlzcGxheVRvZG9MaXN0KHRvZG9MaXN0LCBjb250YWluZXIpIHtcbiAgICAvLyBtYWtlVGFza0NhcmQgZnIuIGNvbnRlbnRzIG9mIHRvZG9MaXN0XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJydcbiAgICBsZXQgdGFza3MgPSB0b2RvTGlzdC5nZXRUb2RvTGlzdCgpXG5cbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBsZXQgbmV3VGFza0NhcmQgPSBtYWtlVGFza0NhcmQodGFzaylcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tDYXJkKVxuICAgIH0pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlUb2RvTGlzdCIsImZ1bmN0aW9uIG1ha2VUYXNrQ2FyZCh0YXNrT2JqKSB7XG4gICAgY29uc3QgQ0FSRF9TVFlMRSA9IFwidGFza0NhcmRcIlxuICAgIGNvbnN0IENIRUNLQk9YX0RJVl9TVFlMRSA9ICdjaGVja0JveENvbnRhaW5lcidcblxuICAgIC8vIENSRUFURSBDT05UQUlORVJTIEFORCBDT05URU5UIFRBR1NcbiAgICBsZXQgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IGNoZWNrQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcblxuICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3IgKGxldCBwcm9wIGluIHRhc2tPYmopIHtcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykgXG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtwcm9wfTogJHt0YXNrT2JqW3Byb3BdfWBcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwKVxuICAgIH1cblxuICAgIC8vIFNFVCBTVFlMSU5HXG4gICAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKENBUkRfU1RZTEUpXG4gICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChDSEVDS0JPWF9ESVZfU1RZTEUpXG5cbiAgICAvLyBBREQgVE8gQ0FSRCBDT05UQUlORVJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94RGl2LmFwcGVuZENoaWxkKGNoZWNrQm94KSlcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpXG4gICAgcmV0dXJuIGNhcmRDb250YWluZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVRhc2tDYXJkIiwiY2xhc3MgdG9kb0xpc3RSZXBvc2l0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50b2RvTGlzdHMgPSBbXVxuICAgIH1cblxuICAgIGNyZWF0ZUxpc3QobmFtZSkge1xuICAgICAgICB0aGlzLnRvZG9MaXN0cy5wdXNoKG5ldyB0b2RvTGlzdChuYW1lKSlcbiAgICB9XG5cbiAgICBkZWxldGVMaXN0KGxpc3RJbmRleCA9IHRoaXMudG9kb0xpc3RzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnRvZG9MaXN0cy5zcGxpY2UobGlzdEluZGV4LCAxKVxuICAgIH1cblxuICAgIGdldFRvZG9MaXN0KGxpc3RJbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvTGlzdHNbbGlzdEluZGV4XVxuICAgIH1cbn1cblxuY2xhc3MgdG9kb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLnRvZG9JdGVtTGlzdCA9IFtdXG4gICAgfVxuXG4gICAgY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XG4gICAgICAgIGxldCBuZXdUYXNrID0ge3RpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGV9XG4gICAgICAgIHRoaXMudG9kb0l0ZW1MaXN0LnB1c2gobmV3VGFzaylcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tcbiAgICB9XG5cbiAgICBkZWxldGVUYXNrKGl0ZW1JbmRleCA9IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMudG9kb0l0ZW1MaXN0LnNwbGljZShpdGVtSW5kZXgsIDEpXG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb0l0ZW1MaXN0Lmxlbmd0aFxuICAgIH1cblxuICAgIGdldFRvZG9MaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvSXRlbUxpc3RcbiAgICB9XG59XG5cbmV4cG9ydCB7dG9kb0xpc3RSZXBvc2l0b3J5LCB0b2RvTGlzdH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7dG9kb0xpc3RSZXBvc2l0b3J5LCB0b2RvTGlzdH0gZnJvbSBcIi4vdG9kb09iamVjdHMuanNcIlxuaW1wb3J0IG1ha2VUYXNrQ2FyZCBmcm9tIFwiLi9tYWtlVGFza0NhcmQuanNcIlxuaW1wb3J0IGRpc3BsYXlUb2RvTGlzdCBmcm9tIFwiLi9kaXNwbGF5VG9kb0xpc3QuanNcIlxuaW1wb3J0IHtnZXRUYXNrSW5wdXQsIGNsZWFySW5wdXR9IGZyb20gXCIuL2NyZWF0ZVRhc2suanNcIlxuXG5sZXQgdG9kb0xpc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9MaXN0JylcbmxldCBteUxpc3QgPSBuZXcgdG9kb0xpc3QoJ0ZpcnN0IHRvZG8nKVxubGV0IHRlc3RUYXNrcyA9IFtbJ0Nob3JlcycsICdkbycsICdsb3cnLCAnZGVjMTIyMDIyJ10sIFxuICAgIFsnRmxvb3JzJywgJ2RvJywgJ2xvdycsICdkZWMxMjIwMjMnXSwgXG4gICAgWydDbG90aGVzJywgJ2RvJywgJ2xvdycsICdkZWMxMjIwMjQnXV1cblxudGVzdFRhc2tzLmZvckVhY2goIGVsZW0gPT4ge1xuICAgIG15TGlzdC5jcmVhdGVUYXNrKGVsZW1bMF0sIGVsZW1bMV0sIGVsZW1bMl0sIGVsZW1bM10pXG59KVxuXG5kaXNwbGF5VG9kb0xpc3QobXlMaXN0LCB0b2RvTGlzdE5vZGUpXG5jb25zdCBUQVNLX0lOUFVUX1NFTEVDVE9SUyA9IFsnaW5wdXRbbmFtZT1cInRpdGxlXCJdJywgJ3RleHRhcmVhW25hbWU9XCJkZXNjcmlwdGlvblwiXScsICdzZWxlY3RbbmFtZT1cInByaW9yaXR5XCJdJywgJ2lucHV0W25hbWU9XCJkdWVEYXRlXCJdJ11cblxuXG5jb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdUYXNrQnRuXCIpXG5jb25zdCB0YXNrUHJvbXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVUYXNrUHJvbXB0XCIpXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrQnRuXCIpXG5jb25zdCBjYW5jZWxUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxUYXNrQnRuXCIpXG5cbm5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0YXNrUHJvbXB0LnNob3dNb2RhbCgpKVxuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgbmV3VGFza0lucHV0ID0gZ2V0VGFza0lucHV0KFRBU0tfSU5QVVRfU0VMRUNUT1JTLCBcIi5jcmVhdGVUYXNrUHJvbXB0XCIpXG4gICAgICAgIG15TGlzdC5jcmVhdGVUYXNrKC4uLm5ld1Rhc2tJbnB1dClcbiAgICAgICAgY2xlYXJJbnB1dChUQVNLX0lOUFVUX1NFTEVDVE9SUywgXCIuY3JlYXRlVGFza1Byb21wdFwiKVxuICAgICAgICBkaXNwbGF5VG9kb0xpc3QobXlMaXN0LCB0b2RvTGlzdE5vZGUpXG4gICAgICAgIHRhc2tQcm9tcHQuY2xvc2UoKVxuICAgIH1cbilcbmNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0YXNrUHJvbXB0LmNsb3NlKCkpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==