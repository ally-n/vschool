const xhr = new XMLHttpRequest()
        // method  // url                     // async?
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(showData(data.results))
    } 
}

function showData(arr){
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        h1.textContent = `This Pokemon's name is ${arr[i].name}`
        h2.textContent = `You can find more info about them at ${arr[i].url}`
        document.body.appendChild(h1)
        document.body.appendChild(h2)
    }
}