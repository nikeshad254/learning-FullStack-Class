//red, blue, green, navy, yellow

let color = document.getElementById("color");
let body = document.querySelector("body");
let interval;
function change(){
    body.onclick = ()=>{};

    let mode1 = "", mode2 = "";
    if (document.getElementById('random').checked) {
        mode1 = document.getElementById('random').value;
    }
    if (document.getElementById('sequence').checked) {
        mode1 = document.getElementById('sequence').value;
    }
    if (document.getElementById('auto').checked) {
        mode2 = document.getElementById('auto').value;
    }
    if (document.getElementById('click').checked) {
        mode2 = document.getElementById('click').value;
    }

    if(color.value.length>0 && mode1.length>0 && mode2.length>0){
        try {
            let inpColor = color.value;
            inpColor = color.value.replace(/\s/g, "");
            inpColor = inpColor.split(",");
            clearInterval(interval);
            if(mode2 == "auto"){
                console.log(inpColor);
                let i = 0;
                if(mode1 == "random"){
                    interval = setInterval(()=>{
                        let i = Math.floor(Math.random() * inpColor.length);
                        body.style.background = `${inpColor[i]}`;
                        // (i>=inpColor.length - 1)?i=0:i++;
                    },1000);
                }
                else if(mode1 == "sequence"){
                    interval = setInterval(()=>{
                        body.style.background = `${inpColor[i]}`;
                        (i>=inpColor.length - 1)?i=0:i++;
                    },1000);
                }
            }
            
            if(mode2 == "click"){
                let i = 0;
                console.log(inpColor);
                if(mode1 == "sequence"){
                    body.onclick = (e)=>{
                        body.style.background = `${inpColor[i]}`;
                        (i>=inpColor.length - 1)?i=0:i++;
                    };
                }
                if(mode1 == "random"){
                    body.onclick = (e)=>{
                        i = Math.floor(Math.random() * inpColor.length);
                        body.style.background = `${inpColor[i]}`;
                    };
                }
                
            }

        }catch (error) {
            
        }
    }
}