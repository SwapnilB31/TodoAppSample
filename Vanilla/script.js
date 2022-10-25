/**@type {HTMLInputElement} */
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const container = document.getElementsByClassName("container")[0];

addBtn.addEventListener("click",(e) => {
    //Get the input value from the Text Input
    const todo = input.value;

    //Create the div to house the todo-item
    const div = document.createElement('div');
    div.setAttribute('class','item');

    //Create the checkbox to represent the checked/unchecked state
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';

    checkbox.addEventListener('click',(e) => {
        const checkbox = e.target;
        const itemDiv = checkbox.parentElement;
        /**@type {HTMLSpanElement} */
        const span = itemDiv.getElementsByTagName('span')[0];
        // span.classList.toggle('strike-through');
        const checked = checkbox.checked;
        if(checked) {
            if(!span.classList.contains('strike-through'))
                span.classList.add('strike-through')
        }
        else {
            if(span.classList.contains('strike-through'))
            span.classList.remove('strike-through')
        }
    })

    //create the span tag to display the todo label
    const span = document.createElement('span')
    span.innerText = todo;

    div.appendChild(checkbox);
    div.appendChild(span);

    container.appendChild(div);

    input.value = '';
});