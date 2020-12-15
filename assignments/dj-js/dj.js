let djbox = document.getElementsByClassName("djbox")[0];

djbox.addEventListener("mouseover", blue);
djbox.addEventListener("mousedown", red);
djbox.addEventListener("mouseup", yellow);
djbox.addEventListener("dblclick", green);
djbox.addEventListener("onscroll", orange);

function blue() {
    djbox.style.backgroundColor = "blue";
}

function green() {
    djbox.style.backgroundColor = "green";
}

function red() {
    djbox.style.backgroundColor = "red";
}

function yellow() {
    djbox.style.backgroundColor = "yellow";
}

function orange() {
    djbox.style.backgroundColor = "orange";
}
/* Blue when the mouse hovers over the square

Red when the mouse button is held down over the square

Yellow when the mouse button is let go over the square

Green when the mouse is double clicked in the square

Orange when the mouse scroll is used somewhere in the window (not just over the square).

You should also be able to press the first letter of the colors (typing "r" on the keyboard
 for "red", for example) and have the box change to that color. Check this site for a full
 list of keyboard key codes. */
