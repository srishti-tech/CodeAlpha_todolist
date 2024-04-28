let todoList=[];
displayItems();

function addTodo(){
let inputElement=document.querySelector('#todo-input');
let dateElement=document.querySelector('#todo-date');
let todoItem=inputElement.value;
let todoDate=dateElement.value;
todoList.push({item: todoItem, dueDate:todoDate});
inputElement.value='';
dateElement.value='';

displayItems();
}

function displayItems(){
let containerElement =document.querySelector('.todo-container');
let newHtml='';

for(i=0;i<todoList.length;i++){
  let{item,dueDate}=todoList[i];
    newHtml+= `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn btn-danger btn-delete "
    onclick="todoList.splice(${i},1); 
    displayItems();">DELETE</button>
    `;
}

containerElement.innerHTML =newHtml;
}