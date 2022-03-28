var form = document.getElementById("addform");
var itemList = document.getElementById("items");

form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();

  console.log(1);
}
