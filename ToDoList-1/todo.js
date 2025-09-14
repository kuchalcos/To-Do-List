
  
    document.addEventListener("DOMContentLoaded", () => {
      const taskForm = document.getElementById("task-form");
      const taskInput = document.getElementById("task-input");
      const taskList = document.getElementById("task-list");
      const emptyImage = document.querySelector(".empty-image");

      function toggleEmptyImage() {
        emptyImage.style.display = taskList.children.length === 0 ? "block" : "none";
      }

      taskForm.addEventListener("submit", (e) => {
        e.preventDefault(); // prevent page reload

        const text = taskInput.value.trim();
        if (!text) return;

        const li = document.createElement("li");
        li.textContent = text;

        const del = document.createElement("button");
        del.className = "delete-btn";
        del.textContent = "✖";
        del.addEventListener("click", () => {
          li.remove();
          toggleEmptyImage();
        });

        li.appendChild(del);
        taskList.appendChild(li);

        taskInput.value = "";
        toggleEmptyImage();
      });

      toggleEmptyImage(); // initial check
    });
  