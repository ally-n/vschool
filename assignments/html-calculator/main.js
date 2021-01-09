const form = document["my-form"]
document.getElementById("submit1").addEventListener("click", add);
document.getElementById("submit2").addEventListener("click", subtract);
document.getElementById("submit3").addEventListener("click", multiply);
function add() {
    event.preventDefault()
    const add1 = form.num1.value
    const add2 = form.num2.value
    const sum = parseInt(add1) + parseInt(add2);
    form.num1.value = ""
    form.num2.value = ""
    const h1 = document.createElement('p')
    h1.textContent = sum
    document.getElementsByTagName("body")[0].append(h1)
}
function subtract() {
    event.preventDefault()
    const sub1 = form.num3.value
    const sub2 = form.num4.value
    const difference = sub1 - sub2;
    form.num3.value = ""
    form.num4.value = ""
    const h1 = document.createElement('p')
    h1.textContent = difference
    document.getElementsByTagName("body")[0].append(h1)
}
function multiply() {
    event.preventDefault()
    const mult1 = form.num5.value
    const mult2 = form.num6.value
    const product = mult1 * mult2;
    form.num5.value = ""
    form.num6.value = ""
    const h1 = document.createElement('p')
    h1.textContent = product
    document.getElementsByTagName("body")[0].append(h1)
}