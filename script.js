const state = JSON.parse(localStorage.getItem("todoState")) || [
  { name: "Задача №1", checked: false },
  { name: "Задача №2", checked: true },
];

const input = document.querySelector(".input-container input");
const buttonSave = document.querySelector(".input-container button");
const list = document.querySelector(".todo-list");

function saveStateToLocalStorage() {
  localStorage.setItem("todoState", JSON.stringify(state));
}

function createTask(task) {
  const li = document.createElement("li");
  li.className = "todo-list-item";
  li.innerHTML = `<input class="input-checkbox" type="checkbox" ${task.checked ? 'checked' : ''} />
                  <input class="input-value" value="${task.name}" type="text" />
                  <button class="remove-btn">Remove</button>`;

  const removeBtn = li.querySelector(".remove-btn");
  removeBtn.addEventListener("click", () => {
    removeTask(task);
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

function removeTask(taskToRemove) {
  const index = state.findIndex(task => task === taskToRemove);
  if (index !== -1) {
    state.splice(index, 1);
    saveStateToLocalStorage();
    renderTasks();
  }
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
  state.forEach((task) => {
    list.appendChild(createTask(task));
  });
}

state.forEach((task) => {
  list.appendChild(createTask(task));
});

buttonSave.addEventListener("click", () => {
  state.push({ name: input.value, checked: false });
  input.value = '';
  saveStateToLocalStorage();
  renderTasks();
});

