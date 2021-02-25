var img = document.getElementById("kitty")
img.addEventListener("click", clickCount())
var count = 0
// if (localStorage.getItem("clickStorage") === null) {
//     localStorage.setItem(document.getElementById("clicks").innerHTML = 0)
// }
if (localStorage.getItem("clickStorage")){
    count=localStorage.getItem("clickStorage")
  } else {
      count = 0
  }
function clickCount() {
    count += 1;
    document.getElementById("clicks").innerHTML = count
    console.log(count) 
    localStorage.setItem("clickStorage", count)
}
localStorage.setItem("clickStorage", count)
localStorage.getItem("clickStorage") 



// let bodyClick = document.getElementById("clickme")
// let par=document.getElementById("paragraph")
// let count = 0;

// if (localStorage.getItem("numberOfClicks")){
//   count=localStorage.getItem("numberOfClicks")
// }  
// else {count=0}

// function event(){
//   count ++
//   par.textContent = count
//   localStorage.setItem("numberOfClicks", count)
// }
// localStorage.setItem("numberOfClicks", count)

// bodyClick.addEventListener("click", event)