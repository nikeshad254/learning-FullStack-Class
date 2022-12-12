function calc(num, el){
    let inHtml = "";
    let table = document.querySelector(".main-table");
    for(let i=1; i<11; i++){
        inHtml += `<li>${num} x ${i} = ${num*i}</li>`;
    }
    table.innerHTML = inHtml;
}