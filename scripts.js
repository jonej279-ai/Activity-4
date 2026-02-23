console.log("Scripts loaded successfully.");

/* -------------------------
   PART A: Element Creation
-------------------------- */

let demoElement = document.createElement("p");
console.log("Created element:", demoElement);

demoElement.textContent = "This paragraph was created with JavaScript.";
console.log("Modified element:", demoElement);

/* -------------------------
   PART B: Styling Demo
-------------------------- */

demoElement.style.color = "blue";
demoElement.classList.add("pending");

console.log("Has class pending?", demoElement.classList.contains("pending"));

demoElement.classList.toggle("done");
console.log("Toggled done class:", demoElement.className);

/* -------------------------
   PART C: Appending Demo
-------------------------- */

let outputDiv = document.getElementById("output");

outputDiv.appendChild(demoElement);
console.log("Element appended to output div.");

let newElement = document.createElement("p");
newElement.textContent = "Prepended element example.";
outputDiv.prepend(newElement);

outputDiv.removeChild(newElement);
console.log("Element removed.");

/* -------------------------
   PART D: To-Do Function
-------------------------- */

function addTask() {
    let input = document.getElementById("task-input");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;
    li.classList.add("pending");

    li.onclick = function () {
        toggleTask(li);
    };

    document.getElementById("todo-list").appendChild(li);

    input.value = "";

    console.log("Task added:", taskText);
    updateStats();
}

/* -------------------------
   PART E: Task State
-------------------------- */

function toggleTask(task) {
    task.classList.toggle("done");
    task.classList.toggle("pending");

    console.log("Task toggled:", task.textContent);
    updateStats();
}

function updateStats() {
    let tasks = document.querySelectorAll("#todo-list li");
    let completed = document.querySelectorAll("#todo-list li.done");

    console.log("Total tasks:", tasks.length);
    console.log("Completed tasks:", completed.length);
}