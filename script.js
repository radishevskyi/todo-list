const input = document.querySelector(".input-container input");
const button = document.querySelector(".input-container button");
const list = document.querySelector(".todo-list");


button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.className = "todo-list-item";
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  li.innerHTML = `<input class="input-checkbox" type = "checkbox"/> <input class="input-value" value = "${input.value}" type = "text"/>`;
  list.appendChild(li);
  li.appendChild(removeBtn);
  input.value = '';

  removeBtn.addEventListener("click", () => {
    list.removeChild(li)
  })
});
