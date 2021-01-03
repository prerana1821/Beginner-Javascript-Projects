let inputTask = document.querySelector('.input-txt');
let addBtn = document.querySelector('.btn-submit');
let taskList = document.querySelector('.todo-lists');
let date = document.querySelector('.date');


let dateObject = new Date();
date.innerText = dateObject.toLocaleString();


inputTask.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTodo(event);
        // console.log('Hello');
    }
});

addBtn.addEventListener('click', addTodo);
taskList.addEventListener('click', checkDelete);

function addTodo(event) {
    event.preventDefault();
    // console.log('Prerana');

    if (inputTask.value.length <= 0) {
        alert('Please, Enter some text!')
    } else {
        let todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        let todoLi = document.createElement('li');
        todoLi.innerText = inputTask.value;
        todoLi.classList.add('todo-list');

        todoItem.appendChild(todoLi);

        let checkBtn = document.createElement('div');
        checkBtn.innerHTML = '<img class="btn-check-img" src="images/checked.gif"/>';
        checkBtn.classList.add('btn-check');
        todoItem.appendChild(checkBtn);

        let deleteBtn = document.createElement('div');
        deleteBtn.innerHTML = '<img class="btn-delete-img" src="images/deleted.gif"/>';
        deleteBtn.classList.add('btn-delete');
        todoItem.appendChild(deleteBtn);

        taskList.appendChild(todoItem);

        inputTask.value = '';
    }
}

function checkDelete(event) {
    let item = event.target;
    console.log(item);
    if (item.classList[0] === 'btn-delete') {
        // console.log(event.target.parentElement);
        // event.target.parentElement.remove();
        item.parentElement.remove();
    } else if (item.classList[0] === 'btn-check') {
        item.parentElement.classList.toggle('task-completed');
    }
}

var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 1)
    }).add({
        targets: '.ml9',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });