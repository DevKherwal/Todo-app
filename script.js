const taskForm =document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(taskInput.value);
});