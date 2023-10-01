function addTask() {
    const newTaskInput = document.getElementById("newTask");
    const taskList = document.getElementById("taskList");

    if (newTaskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "task";

    const taskText = document.createElement("span");
    taskText.textContent = newTaskInput.value;

    const completeButton = document.createElement("button");
    completeButton.innerHTML = "✔";
    completeButton.onclick = function () {
        taskText.classList.toggle("complete");
    };

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "❌";
    removeButton.onclick = function () {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskText);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(removeButton);

    taskList.appendChild(taskItem);

    newTaskInput.value = ""; // Clear input field
}