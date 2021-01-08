const h1 = document.createElement("h1")
h1.textContent = "JavaScript Made This!!!"
header.appendChild(h1)
header.style.textAlign = "center"


const h2 = document.createElement("h2")
h2.innerHTML = '<span class="name">Ally</span> wrote the JavaScript'
header.appendChild(h2)
header.style.textAlign = "center"
h2.style.color = "pink"

const messages = document.getElementsByClassName("message");
messages[0].textContent = "The road is icy today- be careful!";
messages[1].textContent = "Okay, I will. Thanks";
messages[2].textContent = "YOLO";
messages[3].textContent = "It's usually not used as a warning, Mom";

let clearbtn = document.getElementById("clear-button");
clearbtn.addEventListener("click", clearMessages)

function clearMessages() {
    const messages = document.getElementsByClassName("message");
    messages[0].textContent = "";
    messages[1].textContent = "";
    messages[2].textContent = "";
    messages[3].textContent = "";
}


