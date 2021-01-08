var cat = {
    firstName: "Bam Bam",
    lastName: "Nickell",
    age: 5,
    isHungry: false,
    likes: ["cat food", "sleeping", "playing", "sunning"]
}

console.log(cat.likes)

console.log(cat["likes"])


if (cat.age === 5) {
    console.log("What a cute 5 year old kitty!");
} else if (cat.age === 1) {
    console.log("What a cute little kitten!");
} else if (cat.age > 6) {
    console.log("She's getting older!");
}

if (cat.isHungry) {
    console.log("Better feed that cat!");
} else if (!cat.isHungry) {
    console.log("She doesn't need any more food.");
}


for (var i = 0; i < 5; i++) {
    console.log(i);
}

for (var i = 0; i <= 25; i += 5) {
    console.log(i);
}

for (var i = 0; i < 4; i++) {
    console.log(cat.likes[i]);
}

for (var i = 0; i < 4; i += 2) {
    console.log(cat.likes[i])
    console.log(cat.likes.length);
}

var button = document.getElementById("button")
button.addEventListener("click", function () {
    console.log("They wanted a different style")
})

var img = document.getElementById("tiger")
img.addEventListener("click", function () {
    console.log("The picture was clicked")
})

var button = document.getElementById("button")
button.addEventListener("click", function () {
    document.body.style.backgroundColor = "black"
})

var button = document.getElementById("button")
button.addEventListener("click", function () {
    document.body.style.color = "pink"
})

var link = document.getElementById("http-cats")
link.addEventListener("click", function () {
    alert("Are you sure you'd like to go there?");
})
