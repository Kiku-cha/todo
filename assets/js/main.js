//ノーマルで作成
let todoApp = {
    addTask: document.querySelector('.add'),
    list: document.querySelector('.todos'),

    init: function(){
        for(var key in localStorage) {
            var html = localStorage.getItem(key);
            if(html) {
                todoApp.list.innerHTML += localStorage.getItem(key);
            }
        }
    },
    createTodoList: function(task){
        const html = `
            <li class="todo-list__item">
            <p class="comment">${task}</p>
            <span class="d-btn"></span>
            </li>
        `;
        todoApp.list.innerHTML += html;
        todoApp.saveTaskToLocalStorage(task,html);
    },

    saveTaskToLocalStorage: function (task,html){
        if (html) {
            localStorage.setItem(task, html);
            return;
        }
        return;
    },

    deleteTaskFromLocalStorage: function(task){
        localStorage.removeItem(task);
        return;
    },
}

todoApp.init();


todoApp.addTask.addEventListener('submit', e =>{
    e.preventDefault();

    const task = todoApp.addTask.add.value.trim();
    if(task.length){
        todoApp.createTodoList(task);
        todoApp.addTask.reset();
    }
});

//削除
todoApp.list.addEventListener('click',e => {
    console.log(e.target.classList);
    if(e.target.classList.contains('d-btn')){
        e.target.parentElement.remove();
    }
});
