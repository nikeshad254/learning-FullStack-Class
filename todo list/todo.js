let task_table = document.getElementById("task-table");
let tasks = document.getElementById("tasks");
let addBtn = document.getElementById("addTaskBtn");
let inpTask = document.getElementById("addTask");
let alert = document.getElementById("top-alert");

function throwAlert(status, message){
    if(status == 1){
        
    }
    else if(status == 0){

    }
}

addBtn.addEventListener("click", ()=>{
    let task = inpTask.value;
    task =  task.trim();
    let key= Date.now();
    if(task.length > 0){
        //add task
        localStorage.setItem(key, task)
    }
});
