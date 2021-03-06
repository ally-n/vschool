const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgURL.value
    }
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.imgURL.value = ""
    axios.post("https://api.vschool.io/[ally_n]/todo", newTodo)
        .then(
            res => getData())
        .catch(err => console.log(err))
})

function getData(){
    clearList()
    axios.get("https://api.vschool.io/[ally_n]/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){ 
            getNew(response.data[i])   
        }
    })
    .catch(error => console.log(error))
    
}
getData()
function clearList(){
    const list = document.getElementById('todo-list')
    while(list.firstChild){
        list.removeChild(el.firstChild)
    }
}
function autoRefresh( t ) {
    setTimeout("location.reload(true);", t);
 }
function getNew(myNewResponse) {
    const h1 = document.createElement('h1')
            const h2 = document.createElement('p')
            const p = document.createElement('p')
            const img = document.createElement('img')
            const editBtn = document.createElement('button')
            const delBtn = document.createElement('button')
            var x = document.createElement("input");
            x.className = 'checkbox';
            var label = document.createElement("label");
            x.setAttribute("type", "checkbox")
            x.setAttribute("name", "completed")
            h1.textContent = myNewResponse.title
            h2.textContent = myNewResponse.price
            p.textContent = myNewResponse.description
            img.src = myNewResponse.imgUrl
            img.width = 300
            editBtn.textContent = "Edit"
            delBtn.textContent = "Delete"
            document.getElementById('todo-list').style.padding.bottom = "100px";
            document.getElementById('todo-list').appendChild(h1)
            document.getElementById('todo-list').appendChild(h2)
            document.getElementById('todo-list').appendChild(p)
            document.getElementById('todo-list').appendChild(x)
            document.getElementById('todo-list').appendChild(label)
            document.getElementById('todo-list').appendChild(delBtn)
            document.getElementById('todo-list').appendChild(img)
            document.getElementById('todo-list').appendChild(editBtn)

           deleteTodo(delBtn, myNewResponse)
}
function deleteTodo(deleteButton, data  ) {
    deleteButton.addEventListener("click", function () {
      axios.delete("https://api.vschool.io/[ally_n]/todo/" + data._id)
        .then(response => {
          deleteButton.parentNode.remove()
          autoRefresh()
          
        })
        .catch(error => console.log(error))
    })
 
  }
// function deleteTodo(delBtn, myNewResponse) {
//     delBtn.addEventListener("click", function() {
//         console.log("button is working")
//         axios.delete("https://api.vschool.io/[ally_n]/todo" + myNewResponse._id).then(function(response) {
//             alert("Your todo was successfully deleted!")
//         },
//             alert("There was a problem deleting your todo."
//     })
    

// deleteBtn.addEventListener("click", () => {
//     axios.delete(`https://api.vschool.io/ragnarlothbrok/todo/${res.data[i]._id}`)
//         .then(res => {
//             document.getElementById("todo-items").innerHTML = ""
//             getTodos()
//         })
//         .catch(err => console.log(err))
// })



    



// function listData(data){
//     clearList()
    
//     for(let i = 0; i < data.length; i++){
//         const h1 = document.createElement('h1')
//         const h2 = document.createElement('h2')
//         const p = document.createElement('p')
//         // const h1 = document.createElement('h2') will be image URL
//         h1.textContent = data[i].title
//         h2.textContent = data[i].price
//         p.textContent = data[i].description
//         document.getElementById('todo-list').appendChild(h1)
//         document.getElementById('todo-list').appendChild(h2)
//         document.getElementById('todo-list').appendChild(p)
//     }
// }








