let task = document.getElementById("task");
let dateandtime = document.getElementById("d&t");
let note = document.getElementById("des");
let buton = document.getElementById("btn");
let t = document.getElementById("taskSummary");

function add() {
  if (task.value === "" || dateandtime.value === "") {
    alert("Please fill out the necessary information");
  } else {
    let newrow = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");

    cell1.innerHTML = task.value;
    cell2.innerHTML = dateandtime.value;
    if (note.value === "") {
      cell3.innerHTML = "-";
    } else {
      cell3.innerHTML = note.value;
    }

    newrow.appendChild(cell1);
    newrow.appendChild(cell2);
    newrow.appendChild(cell3);

    t.appendChild(newrow);
    task.value = "";
    dateandtime.value = "";
    note.value = "";
  }
}
