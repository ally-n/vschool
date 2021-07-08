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
            getData())
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

function clearList(){
    const list = document.getElementById('todo-list')
    while(list.firstChild){
        list.removeChild(el.firstChild)
    }
}

function autoRefresh(t){
    setTimeout("location.reload(true);", t);
    getData()
}

function getNew(myNewResponse) {
    const h1 = document.createElement('h1')
    const h2 = document.createElement('p')
    const p = document.createElement('p')
    const img = document.createElement('img')
    const editBtn = document.createElement('button')
    const delBtn = document.createElement('button')
    const x = document.createElement("input");
    const label = document.createElement("label");
    h1.className = 'headerText'
    x.className = 'checkbox';
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
    document.getElementById('todo-list').append(h1, h2, p, x, label, delBtn, img, editBtn)
    deleteTodo(delBtn, myNewResponse)
    completeTodo(x, myNewResponse)
    if (myNewResponse.completed === true){
    h1.style.textDecoration='line-through'
    h2.style.textDecoration='line-through'
    p.style.textDecoration='line-through'
    x.checked = true;
   }
}

function deleteTodo(deleteButton, data) {
    deleteButton.addEventListener("click", function () {
      axios.delete("https://api.vschool.io/[ally_n]/todo/" + data._id)
        .then(response => {
          deleteButton.parentNode.remove()
          autoRefresh()
        })
        .catch(error => console.log(error))
    })
    }

function completeTodo(checkbox, data) {
    checkbox.addEventListener("click", e => {        
        if (checkbox.checked === true) {
             axios.put("https://api.vschool.io/[ally_n]/todo/" + data._id, { completed: true })
                .then(res => {
                    console.log(res.data);
                    autoRefresh()
                }).catch(error => {
                    console.log(error);
                });
        }
    })
}

getData()