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
}


function render() {

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