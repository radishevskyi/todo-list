const state = [
  { name: "Задача №1", checked: false },
  { name: "Задача №2", checked: true },
];

const input = document.querySelector(".input-container input");
const buttonSave = document.querySelector(".input-container button");
const list = document.querySelector(".todo-list");

function createTask(name) {
  const li = document.createElement("li");
  li.className = "todo-list-item";
  li.innerHTML = `<input class="input-checkbox" type = "checkbox"/> <input class="input-value" value = "${name}" type = "text"/>`;
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  li.appendChild(removeBtn);
  
  removeBtn.addEventListener("click", () => {
    list.removeChild(li);
  });
  return li;
}

state.forEach((task) => {
  list.appendChild(createTask(task.name));
});

buttonSave.addEventListener("click", () => {
  state.push({ name: input.value, checked: false });
  input.value = '';
  list.innerHTML = "";
  state.forEach((task) => {
    list.appendChild(createTask(task.name));
  });
});
