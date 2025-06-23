const btn = document.getElementById("btn");
const para = document.getElementById("para");

btn.addEventListener('click', function () {
  const input = document.getElementById("text").value.trim();

  if (input !== "") {
    const task = document.createElement('p');

    // ✅ Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";

    const tasktext = document.createElement('span');
    tasktext.textContent = input;

    // ✅ Handle checkbox toggle (strike-through effect)
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        tasktext.classList.add("completed");
      } else {
        tasktext.classList.remove("completed");
      }
    });

    // ✏️ Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
      const updated = prompt("Edit task:", tasktext.textContent);
      if (updated !== null && updated.trim() !== "") {
        tasktext.textContent = updated.trim();
      }
    };

    // ❌ Delete button
    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.onclick = function () {
      task.remove();
    };

    task.appendChild(checkbox);      // ✅ Add checkbox first
    task.appendChild(tasktext);
    task.appendChild(editBtn);
    task.appendChild(deletebtn);
    para.appendChild(task);

    document.getElementById("text").value = "";
  } else {
    alert("Please enter a valid task.");
  }
});
