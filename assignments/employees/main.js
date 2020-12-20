var employees = []

function employee(name, jobTitle, salary) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
}

var harrison = new employee("Harrison", "Pilot", 500000)
var ally = new employee("Ally", "Software Developer", 500000)
var indy = new employee("Indy", "Baby", 500000)
var bambam = new employee("Bam Bam", "Lazy Lounger", 5)
var tiger = new employee("Tiger", "Loud Meower", 5)

bambam.status = "Part Time"

employees.push(harrison, ally, indy, bambam, tiger)

employee.prototype.printEmployeeForm = function () {
    console.log(`Name: ${this.name},  Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status} `)
}

harrison.printEmployeeForm()
ally.printEmployeeForm()
indy.printEmployeeForm()
bambam.printEmployeeForm()
tiger.printEmployeeForm()

console.log(employees)
