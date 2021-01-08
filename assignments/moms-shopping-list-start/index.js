const form = document.addItem


form.addEventListener("submit", function (event) {
    event.preventDefault()
    const listItem = document.createElement("li");
    const listDiv = document.createElement("div")
    listDiv.textContent = title.value;
    form.title.value = "";
    const shoppingList = document.getElementById("list");
    listItem.append(listDiv)
    shoppingList.append(listItem);
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    listItem.append(editBtn);
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    listItem.append(deleteBtn);
    listItem.idName = "list"
    deleteBtn.addEventListener("click", function () {
        listItem.remove();
    })
    editBtn.addEventListener("click", function () {
        listItem.textContent = "Sorry, can't edit this, Mom. Just type it again :)";
    })
})


