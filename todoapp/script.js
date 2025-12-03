let tasks = [];

function Task(title) {
    this.title = title;
    this.status = 'todo';
}

let form = document.getElementById('todo-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let input = document.getElementById('todo-input');
    let taskTitle = input.value.trim();
    if (taskTitle) {
        let newTask = new Task(taskTitle);
        tasks.push(newTask);
        renderTask(newTask);
    }
});

function renderTask(task) {
    const li = document.createElement('li');
    switch (task.status) {
        case 'todo':
            let ulTodo = document.getElementById('todoList');
            li.innerHTML = task.title;
            let startBtn = document.createElement('button');
            startBtn.innerHTML = 'Start';
            startBtn.addEventListener('click', function() {
                startTask(task, this);
            });
            li.appendChild(startBtn);
            ulTodo.appendChild(li);
            break;
        case 'in-progress':
            let ulProgress = document.getElementById('inprogressList');
            li.innerHTML = task.title;
            let completeBtn = document.createElement('button');
            completeBtn.innerHTML = 'Complete';
            completeBtn.addEventListener('click', function() {
                completeTask(task, this);
            });
            li.appendChild(completeBtn);
            ulProgress.appendChild(li); 
            break;
        case 'completed':
            let ulCompleted = document.getElementById('completedList');
            li.innerHTML = task.title;
            ulCompleted.appendChild(li); break;
    }
}

function startTask(task, startbtn) {
    startbtn.parentElement.remove();
    task.status = 'in-progress';
    renderTask(task);
}


function completeTask(task, completeBtn) {
    completeBtn.parentElement.remove();
    task.status = 'completed';
    renderTask(task);
}
