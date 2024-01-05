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

export default makeTaskCard