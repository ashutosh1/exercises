var count=0;
//function to add new rows in table.
function addNewRow() {
  count++;
  table = document.getElementById("demo_table").rows;
  len = table.length;
  var row = document.getElementById("demo_table").insertRow(-1);
  row.id = count;
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell3 = row.insertCell(2);
  var input = document.createElement("input");
  input.id = len + "1";
  var input1 = document.createElement("input");
  input1.id = len + "2";
  var button = document.createElement("input");
  button.setAttribute('type', 'button');
  button.setAttribute('value', 'Save');
  button.setAttribute('onclick', 'saveRowData(this, ' + count + ')');
  cell1.appendChild(input);
  cell2.appendChild(input1);
  cell3.appendChild(button);
}
//function to show the value of text box and 'Edit/Delete' button.
function saveRowData(button, row) {
  var rowindex = document.getElementById(row).rowIndex;
  var cell1data = document.getElementById(rowindex + "1").value;
  table[rowindex].cells[0].innerHTML = cell1data;
  var cell2data = document.getElementById(rowindex + "2").value;
  table[rowindex].cells[0].innerHTML = cell1data;
  table[rowindex].cells[1].innerHTML = cell2data;
  var edit = document.createElement('a');
  edit.innerHTML = "Edit";
  edit.setAttribute('href', '#');
  edit.setAttribute('onclick', 'edit(' + row + ')');
  var removeRows = document.createElement('a');
  removeRows.innerHTML = "Delete";
  removeRows.setAttribute('href', '#');
  removeRows.setAttribute('onclick', 'removeRows(' + row + ')');
  button.style.display = "none";
  var text = document.createTextNode(" / ");
  table[rowindex].cells[2].appendChild(edit);
  table[rowindex].cells[2].appendChild(text);
  table[rowindex].cells[2].appendChild(removeRows);
}
//function to edit the content of exhisting rows.
function edit(row) {
  var rowindex = document.getElementById(row).rowIndex;
  var input = document.createElement("input");
  var cell1data = table[rowindex].cells[0].innerHTML;
  var input1 = document.createElement("input");
  var cell2data = table[rowindex].cells[1].innerHTML;
  input.setAttribute('value', cell1data);
  input1.setAttribute('value', cell2data);
  input.id = rowindex + "1";
  input1.id = rowindex + "2";
  table[rowindex].cells[0].innerHTML = "";
  table[rowindex].cells[0].appendChild(input);
  table[rowindex].cells[1].innerHTML = "";
  table[rowindex].cells[1].appendChild(input1);
  var button = document.createElement("input");
  button.setAttribute('type', 'button');
  button.setAttribute('value', 'Update');
  button.setAttribute('onclick', 'saveRowData(this ,' + row + ')');
  table[rowindex].cells[2].innerHTML = "";
  table[rowindex].cells[2].appendChild(button);
}
//function to remove the rows.
function removeRows(row) {
  document.getElementById("demo_table").deleteRow(document.getElementById(row).rowIndex);
}

