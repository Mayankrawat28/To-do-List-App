document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
  
    addTaskButton.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <span>${taskText}</span>
          <span class="delete">Delete</span>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
  
        const deleteButton = listItem.querySelector(".delete");
        deleteButton.addEventListener("click", function() {
          listItem.remove();
        });
      }
    });
  
    taskInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        addTaskButton.click();
      }
    });
  });
  