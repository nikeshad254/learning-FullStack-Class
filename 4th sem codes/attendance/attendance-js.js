let studentList = {
  class_name: {
    student_name: [
      "nikesh_adhikari",
      "raj_kumer",
      "hero_zero",
      "cute_hero",
      "rajesh_kumar",
    ],
    "2020-10-10": ["nikesh_adhikari", "raj_kumer"],
    "2020-10-10": ["nikesh_adhikari", "raj_kumer"],
  },

  classs_nasme: {
    student_name: [
      "nikesh_adhsikari",
      "raj_kumer",
      "hero_zero",
      "cute_hero",
      "rajesh_kumar",
    ],
    "2020-10-10": ["nikesh_adhsikari", "raj_kumer"],
  },
};

let totalPerson = 0;
let orgDate = document.getElementById("orgDate");
let attendanceTable = document.getElementById("attendanceTable");
let selectOrgNames = document.getElementById("org-names");
let topClassName = document.getElementById("topClassName");
let addPerson = document.getElementById("addPerson");
let addPersonTxt = document.getElementById("addPersonTxt");

let allData = JSON.parse(localStorage.getItem("studentList"));

// console.log(studentList);

function updateTable() {
  let className = selectOrgNames.value;
  topClassName.innerHTML = "- " + className;
  let inHtml = "";
  totalPerson = allData[className].student_name.length;
  for (i = 0; i < allData[className].student_name.length; i++) {
    //   console.log(allData[className].student_name[i]);
    let studentName = allData[className].student_name[i];
    let formattedName = studentName.replace(/_/g, " ");
    inHtml += `
        <tr class="attend ${allData[className].student_name[i]}">
            <td>${i + 1}</td>
            <td>${formattedName}</td>
            <td>
                <input type="radio" class="pres" name="${
                  allData[className].student_name[i]
                }">
                <span></span>
            </td>
            <td>
                <input type="radio" class="abs" name="${
                  allData[className].student_name[i]
                }">
                <span></span>
            </td>
            <td>
                <button onclick="removePerson('${allData[className].student_name[i]}')">remove</button>
            </td>
        </tr>
        `;
  }
  attendanceTable.innerHTML = inHtml;

  let checkBox = document.querySelectorAll("input[type='radio']+span");
  for (i = 0; i < checkBox.length; i++) {
    checkBox[i].addEventListener("click", (e) => {
      //console.log(e.target.parentNode.getElementsByTagName("input")[0]);
      e.target.parentNode.getElementsByTagName("input")[0].checked = true;

      if (e.target.id === "presentAll") selectAllChecks("pres");
      if (e.target.id === "absentAll") selectAllChecks("abs");
      checkAll();
    });
  }
}

function selectAllChecks(nam) {
  let checkBox = document.querySelectorAll("input[type='radio']+span");
  let radio = document.querySelectorAll("input[type='radio']");
  for (i = 0; i < checkBox.length; i++) {
    if (radio[i].className === nam) {
      radio[i].checked = true;
    }
  }
}

function updateSelect() {
  let inHtml = "";
  for (i = 0; i < Object.keys(allData).length; i++) {
    // console.log(Object.keys(allData)[i])
    inHtml += `<option>${Object.keys(allData)[i]}</option>`;
  }
  selectOrgNames.innerHTML = inHtml;
}

selectOrgNames.addEventListener("change", (e) => {
  updateTable(e.target.value);
  topClassName.innerHTML = "- " + e.target.value;
});

addPerson.addEventListener("click", () => {
  if (addPersonTxt.value.length < 1) return 0;
  let currentClass = selectOrgNames.value;
  let name = addPersonTxt.value.replace(/ /g, "_");
  allData[currentClass].student_name.push(name);
  localStorage.setItem("studentList", JSON.stringify(allData));
  updateTable();
});

function checkAll() {
  let radio = document.querySelectorAll("input[type='radio']");
  let pres = 0,
    abs = 0;
  for (i = 0; i < radio.length; i++) {
    // console.log(radio[i].className)
    if (radio[i].className === "pres" && radio[i].checked) {
      pres++;
    }
    if (radio[i].className === "abs" && radio[i].checked) {
      abs++;
    }
  }
  console.log(
    "length, pres , abs = " + pres + " , " + abs + " , " + radio.length
  );
  if (pres == radio.length / 2 - 1) {
  } else if (abs == radio.length / 2 - 1) {
  } else {
    for (i = 0; i < radio.length; i++) {
      if (radio[i].className === "presAll") {
        radio[i].checked = false;
      }
      if (radio[i].className === "absAll") {
        console.log(radio[i]);
        radio[i].checked = false;
      }
    }
  }
}

function removePerson(pname) {
  let class_name = selectOrgNames.value;
  let studentIndex = allData[class_name].student_name.indexOf(pname); // index of student to remove
  allData[class_name].student_name.splice(studentIndex, 1);
  localStorage.setItem("studentList", JSON.stringify(allData));
  updateTable();
}
updateSelect();
updateTable();

/*
let className = "class_name";
let studentIndex = 2; // index of student to remove
allData[className].student_name.splice(studentIndex, 1);
localStorage.setItem("studentList", JSON.stringify(allData));

*/
