// Selecting elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Function to create a new todo item
function createTodoItem(text) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="todo-text">${text}</span>
    <button class="delete-button">Delete</button>
  `;
  return li;
}

// Function to add a new todo item
function addTodoItem(event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
    todoInput.value = "";
  }
}

// Function to delete a todo item
function deleteTodoItem(event) {
  if (event.target.classList.contains("delete-button")) {
    const listItem = event.target.closest("li");
    listItem.remove();
  }
}

// Event listeners
todoForm.addEventListener("submit", addTodoItem);
todoList.addEventListener("click", deleteTodoItem);
