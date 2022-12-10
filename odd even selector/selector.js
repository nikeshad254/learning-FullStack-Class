let numList = document.querySelector("#num-lists");
let evenBtn = document.querySelector("#even-btn");
let oddBtn = document.querySelector("#odd-btn");
let numbs = document.getElementsByClassName("num")


let numbers = 51;

function updateTable(){
    let inHtml = ""
    for(let i=0; i<numbers; i++){
        inHtml += `
            <li class="num ${i}">${i}</li>
        `;
    }
    numList.innerHTML = inHtml;
}
updateTable();

evenBtn.addEventListener("click", (e)=>{
    oddBtn.style.background = "#9007e1";
    updateTable();
    evenBtn.style.background = "#d3691f";
    for(i=0; i<numbers; i++){
        if(i%2 == 0){
            numbs[i].style.background = "#d3691f";
        }
        else{
            numbs[i].innerHTML = "";
        }
    }
});

oddBtn.addEventListener("click", (e)=>{
    evenBtn.style.background = "#9007e1";
    updateTable();
    oddBtn.style.background = "#d3691f";
    for(i=0; i<numbers; i++){
        if(i%2 != 0){
            numbs[i].style.background = "#d3691f";
        }
        else{
            numbs[i].innerHTML = "";
        }
    }
});

