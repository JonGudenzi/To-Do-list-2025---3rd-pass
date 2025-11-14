const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const errorMsg = document.getElementById("errorMsg");
const taskList = document.getElementById("taskList");

let tasks = [];

function addTask(text) {
    const taskObj = {
        text: text,
        completed: false
    }
    tasks.push(taskObj);
    render();
    saveTasks();
}


function render() {
    taskList.innerHTML = "";
    tasks.forEach(function(task) {
        const li = document.createElement("li");
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add("completed");
        }
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    })
}

function saveTasks() {

}

function loadTasks() {

}

function toggleTask(index) {

}

function deleteTask(index) {

}

taskForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const inputText = taskInput.value.trim();
    if (inputText === "") {
        errorMsg.textContent = "Please enter a task";
        return;
    }
    errorMsg.textContent = "";
    addTask(inputText);
    taskInput.value = "";
    taskInput.focus();
}