const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-page ul");

function paintTodo(event){
    event.preventDefault();
    const deleteBtn = document.createElement("i");
    //deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>'
    deleteBtn.setAttribute("class", "fa fa-trash-o-alt");
    const li = document.createElement("li");
    li.innerText = todoInput.value;
    todoInput.value = "";
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

todoForm.addEventListener("submit", paintTodo);