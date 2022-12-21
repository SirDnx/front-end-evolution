//seleção de elementos

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');
let oldInputValue;


//funções

const saveTodo = (inputValue) => {

    const todo = document.createElement("div");
    todo.classList.add("secaoOpcoes--div");
    todo.classList.add("secaoOpcoes--div__todo");

    const todoTitle = document.createElement("h2");
    todoTitle.innerText = inputValue;
    todoTitle.classList.add("secaoOpcoes--subtitulo");
    todo.appendChild(todoTitle);
    
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("secaoOpcoes--button");
    doneBtn.classList.add("finish--todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("secaoOpcoes--button");
    editBtn.classList.add("edit--todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("secaoOpcoes--button");
    removeBtn.classList.add("remove--todo");
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(removeBtn);

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();
};

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = (editInputValue) =>{
    const todos = document.querySelectorAll(".secaoOpcoes--div__todo");

    todos.forEach((todo) => {

        let todoTitle = todo.querySelector("h2");

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = editInputValue;
        }

    })
}

//eventos

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue);
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h2")){
        todoTitle = parentEl.querySelector("h2").innerText;
    }

    if(targetEl.classList.contains("finish--todo")){
        parentEl.classList.toggle("secaoOpcoes--div__done");
    }

    if(targetEl.classList.contains("remove--todo")){
        parentEl.remove();
    }

    if(targetEl.classList.contains("edit--todo")){
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editInputValue = editInput.value;

    if(editInputValue){
        updateTodo(editInputValue);
    }

    toggleForms();
});