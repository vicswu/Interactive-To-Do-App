//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

const dateElement = document.getElementById("date");
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();

    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Checked Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-button");
    todoDiv.appendChild(completedButton);

    //Deleted Button
    const deletedButton = document.createElement('button');
    deletedButton.innerHTML = '<i class="fas fa-trash"></i>';
    deletedButton.classList.add("deleted-button");
    todoDiv.appendChild(deletedButton);

    //Append to List
    todoList.appendChild(todoDiv);

    //Clear todoInput.value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    //Delete todo
    if (item.classList[0] === 'deleted-button') {
        const parent = item.parentElement;
        parent.classList.add('fall');
        parent.addEventListener('transitionend', function() {
            parent.remove();
        });
    }

    //Complete todo
    if (item.classList[0] === 'completed-button') {
        const parent = item.parentElement;
        parent.classList.toggle('completed');
    }
}