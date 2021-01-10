const form = document["my-form"]
document.getElementById("owedBtn").addEventListener("click", addBaddies);
function addBaddies() {
    event.preventDefault()
    const goomba = form.goombas.value
    const bobomb = form.bobombs.value
    const cheepcheep = form.cheepcheeps.value
    const moneyOwed = (goomba * 5) + (bobomb * 7) + (cheepcheep * 11)
    form.goombas.value = ""
    form.bobombs.value = ""
    form.cheepcheeps.value = ""
    const money = document.createElement('p')
    money.textContent = moneyOwed + " coins"
    document.getElementById("owedBtn").append(money)
}