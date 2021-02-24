var img = document.getElementById("kitty")
img.addEventListener("click", clickCount())
var count = 0
if (localStorage.getItem("clicks") === null) {
    localStorage.setItem(document.getElementById("clicks").innerHTML = 0)
}
function clickCount() {
    count += 1;
    document.getElementById("clicks").innerHTML = count
    console.log(count) 
    localStorage.setItem("clickStorage", count)
    localStorage.getItem("clickStorage")  
}