let todoList=JSON.parse(localStorage.getItem('todoInput')) || [
    {
        item:'',
        date:'',
        }
];
displayItems();

function addTodo(){
    let inputElement=document.querySelector('#todoBox');
    let dateElement=document.querySelector('#todoDate');
    let inputItem=inputElement.value;
    let inputDate=dateElement.value;
    if(inputDate && inputItem){
        inputElement.value='';
        dateElement.value='';
        todoList.push({item:inputItem,date:inputDate});
        localStorage.setItem("todoInput",JSON.stringify(todoList));
        displayItems();
    }
    else if(!inputItem && !inputDate){
        alert('Enter the todo task and date');
    }
    else if(!inputDate){
        alert("Add Date");
    }
    else if(!inputItem){
        alert('Enter the task todo');
    }
    else{
        alert('invalid value given');
    }
};
function displayItems(){
    let displayElement=document.querySelector('.todo-container');
    let newHtml='';
    for(let i=1;i<todoList.length;i++){
        let todoItem= todoList[i].item;
        let todoDate=todoList[i].date;
        newHtml+=`
        <span class="js-todo-box">${todoItem}</span>
        <span class="js-todo-box">${todoDate}</span>
        <button class="delete-button js-todo-box" onclick="todoList.splice(${i},1);
        localStorage.removeItem("todoInput");
        displayItems();">Delete</button>
        `;
    }
    displayElement.innerHTML=newHtml;
}