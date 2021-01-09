const form = document["my-form"]
const submit = document.getElementById("submit")

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let firstName = form["firstName"].value
    let lastName = form["lastName"].value
    let age = form.age.value
    let gender = form.gender.value
    let location = form["locations"].value
    let diet = []
    let dietOptions = form.restrictions

     for (let i = 0; i < dietOptions.length; i++) {
        if (dietOptions[i].checked){
            diet.push(dietOptions[i].value)
        }
     }
     
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDietary Restrictions: " + diet + "\nWe look forward to seeing you soon!");
});