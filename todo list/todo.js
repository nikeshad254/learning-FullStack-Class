let task_table = document.getElementById("task-table");
let tasks = document.getElementById("tasks");
let addBtn = document.getElementById("addTaskBtn");
let inpTask = document.getElementById("addTask");
let alert = document.getElementById("top-alert");
let editBtn = document.getElementsByClassName("editBtn");
let rmBtn = document.getElementsByClassName("rmBtn");
let editPg = document.getElementById("editTask");

editPg.style.display = "none";

function throwAlert(status, message){
    if(status == 1){
        alert.hidden = false;
        alert.style.background = "green";
        alert.innerHTML = message;
        setTimeout(() => {
            alert.hidden = true;
        }, 2000);
    }
    else if(status == 0){
        alert.hidden = false;
        alert.style.background = "red";
        alert.innerHTML = message;
        setTimeout(() => {
            alert.hidden = true;
        }, 2000);
    }
}

function removeTask(name){
    localStorage.removeItem(name);
    throwAlert(0, "task deleted");
    updateTask();
}


function editTask(name){
    console.log(name);
    editPg.style.display = "flex";
    let cancelBtn = document.getElementById("cancelBtn");
    let changeBtn = document.getElementById("changeBtn");
    let inpEdit = document.getElementById("editInp");
    inpEdit.value = localStorage.getItem(name);
    changeBtn.addEventListener("click", ()=>{
        if(inpEdit.value.length>0){
            localStorage.setItem(name, inpEdit.value);
            throwAlert(1, "Editing Data complete!!");
            editPg.style.display = "none";
            updateTask();
        }
        else{
            throwAlert(0, "Error empty value can't be added");
        }
    })
    cancelBtn.addEventListener("click",()=>{
        editPg.style.display = "none";
    })

}

updateTask();

function updateTask(){
    if(localStorage.length < 1){
        //no task
        tasks.innerHTML = `
        <tr>
        <td>None</td>
        <td class="task-text">Empty</td>
        <td>
            <p>Empty</p>
        </td>
        </tr>
        `;
        task_table.style.textAlign = "center";
    }
    else{
        let inhtml = "";
        for (i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            inhtml += `
            <tr>
                <td>${i+1}</td>
                <td class="task-text">${localStorage.getItem(key)}</td>
                <td class="btns">
                    <button class="btn editBtn" name="${key}">Edit</button>
                    <button class="btn rmBtn" name="${key}">Remove</button>
                </td>
            </tr>
            `;
        }
        tasks.innerHTML = inhtml;
        for (i = 0; i < localStorage.length; i++){
            rmBtn[i].addEventListener("click", (e)=>{
                removeTask(e.target.name);
            })
            editBtn[i].addEventListener("click", (e)=>{
                editTask(e.target.name);
            })
        }
    }
}

addBtn.addEventListener("click", ()=>{
    let task = inpTask.value;
    task =  task.trim();
    let key= Date.now();
    if(task.length > 0){
        //add task
        localStorage.setItem(key, task)
        throwAlert(1, "Task Addition Sucessfull");
        updateTask();
        inpTask.value="";
    }
    else{
        throwAlert(0, "Empty Failed to add task");
    }
});
