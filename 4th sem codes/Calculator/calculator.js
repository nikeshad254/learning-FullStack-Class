let str = "";
let display = document.getElementById("display");
let buttons = document.getElementsByClassName("one-button");
console.log("new");
let signs = {
    mult : "*",
    pert : "%"
}

Array.from(buttons).forEach((btn) => {
    console.log("hey")
    btn.addEventListener("click", (e)=>{
        console.log(e.target.id);

        if(e.target.id === "equal"){
            let newstr = eval(str);
            if(newstr === str){
                display.innerHTML = "inavlid";
            }
            else{
                display.innerHTML = newstr;
            }
            str = "";
        }
        else if(e.target.id === "AC"){
            str = "";
            display.innerHTML = str;
            
        }
        else if(e.target.id === "sqr"){
            str += "**2";
            display.innerHTML = str;
        }
        else if(e.target.id === "mult"){
            str += "*";
            display.innerHTML = str;
        }
        else if(e.target.id === "back"){
            str = str.substring(0,(str.length - 1));
            display.innerHTML = str;
        }
        else{
            str += e.target.innerHTML;
            display.innerHTML = str;
        }
        
    })
});

