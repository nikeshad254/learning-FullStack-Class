let stuName = document.getElementById("stuName");
let rollNum = document.getElementById("rollNum");
let math = document.getElementById("math");
let social = document.getElementById("social");
let science = document.getElementById("science");
let nepali = document.getElementById("nepali");
let english = document.getElementById("english");
let submit = document.getElementById("submit");


//display portion
let marksheet = document.getElementById("marksheet");
let Stuname = document.getElementById("Stuname");
let Rollnum = document.getElementById("Rollnum");
let Math = document.getElementById("Math");
let Science = document.getElementById("Science");
let Social = document.getElementById("Social");
let Nepali = document.getElementById("Nepali");
let English = document.getElementById("English");
let Total = document.getElementById("Total");
let Percentage = document.getElementById("Percentage");

submit.addEventListener("click",()=>{

    console.log(stuName.value);

    if(stuName.value.length>0 && rollNum.value.length>0){
        marksheet.style.display = "block";
        Stuname.innerText = stuName.value;
        Rollnum.innerHTML = rollNum.value;
    }

    if(math.value.length>0 && science.value.length>0 && social.value.length>0 && nepali.value.length>0 && english.value.length>0){
        
        Math.innerHTML = math.value;
        Science.innerHTML = science.value;
        Social.innerHTML = social.value;
        Nepali.innerHTML = nepali.value;
        English.innerHTML = english.value;
        let totalSub = Number.parseFloat(math.value) + Number.parseFloat(science.value) + Number.parseFloat(social.value) + Number.parseFloat(nepali.value) + Number.parseFloat(english.value);
        Total.innerHTML = totalSub;
        Percentage.innerHTML = totalSub/5 + " %";
    }
    

});