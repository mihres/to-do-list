var added = [];

document.getElementById("myInput").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    document.getElementById("addButton").click()
  }
})

function newElement() {

  focusInput();

  var listItem = document.createElement("label");
  var checkBox = document.createElement("input");
  var inputValue = document.getElementById("myInput").value;
  var inputText = document.createTextNode(inputValue);
  var container = document.getElementById("taskList");

  checkBox.type = "checkbox";
  checkBox.id = "checkbox";

  listItem.appendChild(checkBox);
  listItem.appendChild(inputText);
  listItem.appendChild(document.createElement('br'));

  if (inputValue === '') {
    alert("Write what you would like to add to your list");
  } else if (added.includes(inputValue)) {
    alert(inputValue + " is already in the list");
  } else {
    container.appendChild(listItem);
    added.push(inputValue);
  }

  document.getElementById("myInput").value = "";
}


function focusInput() {
  document.getElementById("myInput").focus();
}


function removeAll() {

  focusInput();

  var lst = document.getElementById("taskList");

  added = [];

  while (lst.firstChild) {
    lst.removeChild(lst.firstChild);
  }
}


function removeSelected() {

  focusInput();

  var checkBox = document.querySelectorAll('#checkbox:checked');
  checkBox.forEach((selected) => {
    selected.parentElement.remove();
  })
}
