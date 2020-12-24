const form = document["form"];
const submit = document.getElementById("submit")

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let firstName = form["first-name"].value;
    let lastName = form["last-name"].value;
    let age = form.age.value;
    let gender = form.gender.value;
    let location = form["travel-location"].value;
    let diet = [];
    let dietOptions = form.diet;

     for (let i = 0; i < dietOptions.length; i++) {
        if (dietOptions[i].checked){
            diet.push(dietOptions[i].value)
        }
     }
     
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
});