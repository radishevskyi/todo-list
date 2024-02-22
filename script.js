const input = document.querySelector(".input-container input");
const button = document.querySelector(".input-container button");
const list = document.querySelector(".todo-list");


button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.className = "todo-list-item";
//   const task = document.createElement("input");
//   task.type = "text"
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  li.innerHTML = `<input type = "checkbox"/> ${input.value}`;
  list.appendChild(li);
  li.appendChild(removeBtn);
  input.value = '';

  removeBtn.addEventListener("click", () => {
    list.removeChild(li)
  })
});
