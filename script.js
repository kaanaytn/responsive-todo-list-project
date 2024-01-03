const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnAddNewTask = document.querySelector('#btnAddNewTask');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const TaskList = document.querySelector('task-list');

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addNewItem);
}

function addNewItem(e){
    console.log("submit");
}