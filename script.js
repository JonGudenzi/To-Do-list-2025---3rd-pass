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
    tasks.forEach(function(task, index) {
        const li = document.createElement("li");
        li.textContent = task.text;
        li.addEventListener("click", function(){
            const liIndex = li.dataset.index;
            toggleTask(liIndex);
        })
        if (task.completed) {
            li.classList.add("completed");
        }
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        li.dataset.index = index;
        deleteBtn.addEventListener("click", function(event){
            const delIndex = li.dataset.index;
            deleteTask(delIndex);
            event.stopPropagation();
        })
    })
}

function saveTasks() {
const storeTask = JSON.stringify(tasks);
localStorage.setItem("tasks", storeTask);
}

function loadTasks() {
    const getTasks = localStorage.getItem("tasks");
    if (getTasks) {
        const parsedTasks = JSON.parse(getTasks);
        tasks = parsedTasks;
        render();
    }
}

function toggleTask(index) {
tasks[index].completed = !tasks[index].completed;
render();
saveTasks();
}

function deleteTask(index) {
tasks.splice(index, 1);
render();
saveTasks();
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

loadTasks();