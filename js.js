const todoInput = document.getElementById("todo-input");
const todoSubmit = document.getElementById("todo-submit");
const todoList = document.getElementById("todo-list");


window.onload = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (todos) {
    todos.forEach(todo => {
      addTodoToList(todo);
    });
  }
}


const saveTodoToLocalStorage = (todo) => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  if (!todos) {
    todos = [];
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}


const addTodoToList = (todo) => {
  const li = document.createElement("li");
  li.textContent = todo;
  todoList.appendChild(li);
  saveTodoToLocalStorage(todo);
}


const handleFormSubmit = (event) => {
  event.preventDefault();
  const todo = todoInput.value.trim();
  if (todo) {
    addTodoToList(todo);
    todoInput.value = "";
  }
}


todoSubmit.addEventListener("click", handleFormSubmit);