


// money.textContent = moneyOwed + " coins"
// document.getElementById("owedBtn").append(money)

var img = document.getElementById("kitty")
img.addEventListener("click", clickCount())
var clickStr = localStorage.getItem("clicks");
var count = 0
if (count === 0) {
    document.getElementById("clicks").innerHTML = 0
}

function clickCount() {
    count += 1;
    document.getElementById("clicks").innerHTML = count
    console.log(count)
    
}

// localStorage.setItem("click", "count")
// var clickerCounter = localStorage.getItem("click");
// console.log(clickerCounter)


// Finished except I need to do the local storage part!!!