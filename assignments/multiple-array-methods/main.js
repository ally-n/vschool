var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


function sortedOfAge(a, b){
    peopleArray.sort(function(a, b) {
        let name1 = a.lastName.toLowerCase();
        let name2 = b.lastName.toLowerCase();
        if (name1 > name2) {
            return 1
        } else if (name1 < name2) {
            return -1
        }
        return 0
    })
    let overAge = peopleArray.filter(over18=> over18.age >= 18);
    return overAge
 }

 console.log(sortedOfAge(peopleArray));
 console.log(sortedOfAge("<li>" + peopleArray.firstName + peopleArray.lastName + " is " + peopleArray.age + "</li>"));
 
