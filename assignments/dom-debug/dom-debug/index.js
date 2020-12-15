const colors = ["red", "blue", "green", "orange", "pink"];

document.getElementById("add").addEventListener("click", function (e) {
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown() {
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++) {
        const option = document.createElement("option")
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }

    dropDown.addEventListener("change", function (e) {

        const newColor = e.target.value;
        const divColor = dropDown.parentNode;
        divColor.style.backgroundColor = newColor;
    });
    return dropDown;
}

function createSubItem(itemValue) {
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue.value;
    const dropDown = createDropDown();
    subItem.appendChild(dropDown);
    subItem.setAttribute("class", "subItem");
    return subItem;
}







