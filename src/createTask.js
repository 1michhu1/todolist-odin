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

export {getTaskInput, clearInput}