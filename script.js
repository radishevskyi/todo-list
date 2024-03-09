let state = JSON.parse(localStorage.getItem("todoState")) || [
  { name: "Задача №1", checked: false },
  { name: "Задача №2", checked: true },
];

const input = document.querySelector(".input-container input");
const buttonSave = document.querySelector(".input-container button");
const list = document.querySelector(".todo-list");

function saveStateToLocalStorage() {
  localStorage.setItem("todoState", JSON.stringify(state));
}

function createTask(task, index) {
  const li = document.createElement("li");
  li.className = "todo-list-item";

  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.className = "input-checkbox";
  inputCheckbox.checked = task.checked;

  const inputText = document.createElement("input");
  inputText.type = "text";
  inputText.className = "input-value";
  inputText.value = task.name;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className = "remove-btn";

  li.appendChild(inputCheckbox);
  li.appendChild(inputText);
  li.appendChild(removeButton);

  if (task.checked) {
    inputText.classList.add("line-through");
  }

  const removeBtn = li.querySelector(".remove-btn");
  removeBtn.addEventListener("click", () => {
    removeTask(index);
  });

  const checkbox = li.querySelector(".input-checkbox");
  checkbox.addEventListener("change", () => {
    updateTaskStatus(task, checkbox.checked);
  });

  const inputValue = li.querySelector(".input-value");
  inputValue.addEventListener("input", () => {
    editTask(task, inputValue.value);
  });

  return li;
}

function removeTask(taskIndexToRemove) {
    state = state.filter((_, index) => {
    console.log(index, taskIndexToRemove);
    return index !== taskIndexToRemove;
  });
  saveStateToLocalStorage();
  renderTasks();
}

function updateTaskStatus(taskToUpdate, newStatus) {
  taskToUpdate.checked = newStatus;
  saveStateToLocalStorage();
  renderTasks();
}

function editTask(taskToEdit, newName) {
  taskToEdit.name = newName;
  saveStateToLocalStorage();
}

function renderTasks() {
  list.innerHTML = "";
  state.forEach((task, index) => {
    list.appendChild(createTask(task, index));
  });
}

renderTasks();

buttonSave.addEventListener("click", () => {
  state.push({ name: input.value, checked: false });
  input.value = "";
  saveStateToLocalStorage();
  renderTasks();
});
