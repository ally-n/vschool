// function getData(){
//     axios.get("https://api.vschool.io/[ally_n]/todo")
//         .then(res => listData(res.data))
//         .catch(err => console.log(err))
// }

//NEED TO WORK ON
//Format and organization
//edit and delete buttons working


axios.get("https://api.vschool.io/[ally_n]/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            const h2 = document.createElement('p')
            const p = document.createElement('p')
            const img = document.createElement('img')
            const editBtn = document.createElement('BUTTON')
            const delBtn = document.createElement('BUTTON')
            var x = document.createElement("INPUT");
            x.className = 'checkbox';
            var label = document.createElement("label");
            label.textContent = "Completed?"
            x.setAttribute("type", "checkbox")
            x.setAttribute("name", "completed")
            h1.textContent = response.data[i].title
            h2.textContent = response.data[i].price
            p.textContent = response.data[i].description
            img.src = response.data[i].imgUrl
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

        //add edit and delete buttons
        //add text ` Check here once complete!` on checkbox  
        }
    })
    .catch(error => console.log(error))

    var deleteTodo = function(singleTodoObject) {
        // This "singleTodoObject" I passed in has an attribute "_id" I can use to delete it
        // I just need to add that "_id" to the end of my URL to which I'm sending this DELETE request
            axios.delete("https://api.vschool.io/jonsmith/todo/" + singleTodoObject._id).then(function(response) {
                // This made a DELETE request to "https://api.vschool.io/jonsmith/todo/5630dcfcac2dfab2428b8c02"
                // Assuming I used the object from the example above.
                alert("Your todo was successfully deleted!")
            }, function(response) {
                alert("There was a problem deleting your todo :(");
            });
        };


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

// function clearList(){
//     const list = document.getElementById('todo-list')
//     while(list.firstChild){
//         list.removeChild(el.firstChild)
//     }
// }

// getData()

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
        .then(res => getData())
        .catch(err => console.log(err))

})

