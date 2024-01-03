

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnAddNewTask = document.querySelector('#btnAddNewTask');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const TaskList = document.querySelector('#task-list');

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addNewItem);

    TaskList.addEventListener("click",deleteItem);

    btnDeleteAll.addEventListener("click",deleteAllItems);
}

function addNewItem(e){

    if(input.value === ""){
        alert("Add new item!")
        console.log("submit");
    }
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href","#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);

    TaskList.appendChild(li);

    input.value = "";

    e.preventDefault();
}

function deleteItem(e){

    if(confirm('Are you sure you want to delete this item?')){
            if(e.target.className === "fas fa-times"){
            // console.log(e.target);
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}

function deleteAllItems(e){
    if(confirm("Are you sure you want to delete all items?")){
        TaskList.childNodes.forEach(function(item){
            if(item.nodeType === 1){
                item.remove();
            }
        })
    }
}