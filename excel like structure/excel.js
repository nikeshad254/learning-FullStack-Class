let tbody = document.getElementById("data-holders");
let htmlAlert = document.getElementsByClassName("alert-space")[0]; //disply flex
let htmlSelect = document.getElementById("condt");  //.value can access
let cpClass = document.getElementsByClassName("cp");
let spClass = document.getElementsByClassName("sp");
let addBtn = document.getElementById("addBtn");

function calculate(key, type){
    let amts = JSON.parse(localStorage.getItem(key));
    let ans;
    if( type === "Profit"){
        ans = Number.parseFloat(amts[1]) - Number.parseFloat(amts[0]);
    }
    else if( type === "Loss"){
        ans = Number.parseFloat(amts[0]) - Number.parseFloat(amts[1]);
    }
    else if( type === "None"){
        ans = "NaN";
    }
    return ans;
}

function updateTable(){
    let inHtml = "";
    for(let i=0; i<localStorage.length; i++){
        let key = localStorage.key(i);
        let amts = JSON.parse(localStorage.getItem(key));
        let select = htmlSelect.value;
        let ans = calculate(key, select);
        inHtml += `
        <tr>
            <td>${i+1}</td>
            <td><input type="number" class="cp" id="${key}cp" value="${amts[0]}" oninput="changeMe('${key}', this)"></td>
            <td><input type="number" class="sp" id="${key}sp" value="${amts[1]}" oninput="changeMe('${key}', this)"></td>
            <td id="${key}ans">${ans}</td>
        </tr>
        `;
    }
    tbody.innerHTML = inHtml;
}
updateTable();

htmlSelect.addEventListener("change", ()=>{
    updateTable();
});

function changeMe(key, el){
    console.log(el.id);
    let cp = document.getElementById(`${key}cp`);
    let sp = document.getElementById(`${key}sp`);
    let ans = document.getElementById(`${key}ans`);
    if(cp.value.length>0 && sp.value.length>0){
        let amts = JSON.parse(localStorage.getItem(key));
        let newAmts = [cp.value, sp.value];
        localStorage.setItem(key, JSON.stringify(newAmts));
        let select = htmlSelect.value;
        ans.innerHTML = calculate(key, select);
    }
    else{
        //fail
        ans.innerHTML = "NaN";
    }
}

function throwAlert(state, message){
    
    if(state === 1){
        htmlAlert.style.display = "flex";
        htmlAlert.style.background = "green";
        document.getElementById("alert").innerHTML = message;
    }
    else{
        htmlAlert.style.display = "flex";
        htmlAlert.style.background = "red";
        document.getElementById("alert").innerHTML = message;
    }
    
}

addBtn.addEventListener("click", ()=>{
    updateTable();
    let cpLength = cpClass.length;
    console.log(cpLength);
    let inHtml = tbody.innerHTML;
    if(cpLength !== localStorage.length){
        throwAlert(0, "Error, fill those input first");
        setTimeout(()=>{
            htmlAlert.style.display = "none";
        },2000);
    }
    else if(cpLength == localStorage.length){
        // updateTable();
        throwAlert(1, "Add your data now");
        setTimeout(()=>{
            htmlAlert.style.display = "none";
        },2000);
        let key = Date.now();
        inHtml += `
        <tr>
            <td>${cpClass.length+1}</td>
            <td><input type="number" class="cp" id="${key}cp" value="0" oninput="changeMe('${key}', this)"></td>
            <td><input type="number" class="sp" id="${key}sp" value="0" oninput="changeMe('${key}', this)"></td>
            <td id="${key}ans">NaN</td>
        </tr>
        `;
        tbody.innerHTML = inHtml;
        cpLength += 1;
    }
});