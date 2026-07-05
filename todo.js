// localStorage.clear();
const themeBtn = document.getElementById("change-theme-btn");
const burgerBtn = document.getElementById("menu-btn");
const closeMenuBtn = document.getElementById("close-menu");
const closeFiltersBtn = document.getElementById("close-filters");
const navbar = document.querySelector(".nav-menu");
const overlay = document.getElementById("overlay");
const filterMenuBtn = document.getElementById("filter-menu-btn");
const filterButtonsContainer = document.getElementById("filter-buttons");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const addTaskForm = document.getElementById("add-task-form");
const taskNameInput = document.getElementById("task-name");
const taskDescInput = document.getElementById("task-desc");
const taskDueInput = document.getElementById("task-due");
const taskTable = document.getElementById("task-list");
const editTaskNumberInput = document.getElementById("edit-task-number");
const editSearchTaskBtn = document.getElementById("edit-search-task-btn");
const editTaskForm = document.getElementById("edit-task-form");
const editTaskNameInput = document.getElementById("edit-task-name");
const editTaskDescInput = document.getElementById("edit-task-desc");
const editTaskDueInput = document.getElementById("edit-task-due");
const editTaskStatusSelect = document.getElementById("edit-task-status");
const deleteSearchTaskBtn = document.getElementById("delete-search-task-btn");
const deleteTaskNumber = document.getElementById("delete-task-number");
const previewName = document.getElementById("preview-name");
const previewDesc = document.getElementById("preview-desc");
const previewDue = document.getElementById("preview-due");
const deleteTaskBtn = document.getElementById("delete-btn");
const statisticsTotal = document.getElementById("total-tasks");
const statisticsCompleted = document.getElementById("completed-tasks");
const statisticsPending = document.getElementById("pending-tasks");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentFilter = "all";

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Theme";
    }
    else {
        themeBtn.textContent = "Dark Theme";
    }
})

burgerBtn.addEventListener("click", () => {
    navbar.classList.add("active")
    overlay.classList.add("active")
    filterButtonsContainer.classList.remove("active")
})

filterMenuBtn.addEventListener("click", () => {
    filterButtonsContainer.classList.add("active")
    overlay.classList.add("active")
    navbar.classList.remove("active")
})

closeMenuBtn.addEventListener("click", () => {
    navbar.classList.remove("active")
    overlay.classList.remove("active")
})

closeFiltersBtn.addEventListener("click", () => {
    filterButtonsContainer.classList.remove("active")
    overlay.classList.remove("active")
})

overlay.addEventListener("click", () => {
    navbar.classList.remove("active")
    filterButtonsContainer.classList.remove("active")
    overlay.classList.remove("active")
})

addTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const addNewTask = {
        id: Date.now(),
        name: taskNameInput.value,
        desc: taskDescInput.value,
        dueDate: taskDueInput.value,
        status: "Pending"
    };
    tasks.push(addNewTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    addTaskForm.reset();
    displayTasks();
})

function displayTasks() {
    taskTable.innerHTML = "";

    let displayedTasks = tasks;
    if (currentFilter === "pending") {
        displayedTasks = tasks.filter(task => task.status === "Pending");
    }
    else if (currentFilter === "completed") {
        displayedTasks = tasks.filter(task => task.status === "Completed");
    }

    displayedTasks.forEach((task, index) => {
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
            <td data-label="S.No">${index + 1}</td>
            <td data-label="Name">${task.name}</td>
            <td data-label="Description">${task.desc}</td>
            <td data-label="Due Date">${task.dueDate}</td>
            <td data-label="Status">${task.status}</td>
            <td data-label="Time Left">${calculateTimeLeft(task.dueDate)}</td>
            `;
        taskTable.appendChild(tableRow);
    });

    updateStatistics();
}

function calculateTimeLeft(dueDate) {
    if (!dueDate) return "-";
    const setDate = new Date(dueDate);
    const currentDate = new Date();
    const realTime = setDate - currentDate;
    if (realTime < 0) {
        return "Overdue!";
    }
    const daysLeft = Math.ceil(realTime / (1000 * 60 * 60 * 24));
    if (daysLeft === 0) {
        return "Due Today";
    }
    else if (daysLeft === 1) {
        return "1 Day Left";
    }
    else {
        return `${daysLeft} Days Left`;
    }
}

displayTasks();

let editingIndex = null;

editSearchTaskBtn.addEventListener("click", () => {
    const taskNumber = parseInt(editTaskNumberInput.value);
    const index = taskNumber - 1;
    if (index >= 0 && index < tasks.length) {
        const taskToEdit = tasks[index];
        editTaskNameInput.value = taskToEdit.name;
        editTaskDescInput.value = taskToEdit.desc;
        editTaskDueInput.value = taskToEdit.dueDate;
        editTaskStatusSelect.value = taskToEdit.status;
        editingIndex = index;
    }
    else {
        alert("Invalid Task Number!")
    }
})

editTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (editingIndex === null) {
        alert("Please load a task to update!");
        return;
    }
    tasks[editingIndex].name = editTaskNameInput.value;
    tasks[editingIndex].desc = editTaskDescInput.value;
    tasks[editingIndex].dueDate = editTaskDueInput.value;
    tasks[editingIndex].status = editTaskStatusSelect.value;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    editTaskForm.reset();
    editTaskNumberInput.value = "";
    editingIndex = null;

    displayTasks();
})

let deleteIndex = null;

deleteSearchTaskBtn.addEventListener("click", () => {
    const DelTaskNum = parseInt(deleteTaskNumber.value);
    const delIndex = DelTaskNum - 1;
    if (delIndex >= 0 && delIndex < tasks.length) {
        const taskToDelete = tasks[delIndex];
        previewName.textContent = taskToDelete.name;
        previewDesc.textContent = taskToDelete.desc;
        previewDue.textContent = taskToDelete.dueDate;
        deleteIndex = delIndex;
    }
    else {
        alert("Invalid Task Number!")
    }
})

deleteTaskBtn.addEventListener("click", () => {
    if (deleteIndex === null) {
        alert("Please load a task to delete!");
        return;
    }
    tasks.splice(deleteIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    deleteTaskNumber.value = "";
    previewName.textContent = "-";
    previewDesc.textContent = "-";
    previewDue.textContent = "-";
    deleteIndex = null;
    displayTasks();
})

function updateStatistics() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.status === "Completed").length;
    const pending = tasks.filter(task => task.status === "Pending").length;
    statisticsTotal.textContent = total;
    statisticsCompleted.textContent = completed;
    statisticsPending.textContent = pending;
}

// Cannot understand this one:
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        currentFilter = button.getAttribute("data-filter");
        displayTasks();
    })
})