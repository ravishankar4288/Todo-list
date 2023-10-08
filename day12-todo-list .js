const todoList = [];

 function renderTodoList(){
    let todoListHTML = '';
    todoList.forEach(function(todoObject, index) {
                const {name,dueDate} = todoObject;
                const html = `
                <div>${name}</div> 
                <div>${dueDate}</div>    
                <button class="css-delete-button js-delete-todo-button">Delete</button>       
                `;
                todoListHTML += html;
    });
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button').forEach((deleteElement, index) =>{
        deleteElement.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        });

    });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () =>{
    addTodo();
});

function addTodo(){
    const inputElement = document.querySelector('.js-input-name');
    const name = inputElement.value;

    const inputDueDateElement = document.querySelector('.js-due-Date-input');
    const dueDate =inputDueDateElement.value;

    
    //console.log(name);
    todoList.push({
        //name: name,
        //dueDate: dueDate
        name,
        dueDate
    });

    inputElement.value = '';
    inputDueDateElement.value = '';

    renderTodoList();
}