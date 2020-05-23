//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);

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

}