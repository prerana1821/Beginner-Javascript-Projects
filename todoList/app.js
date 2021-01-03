let inputTask = document.querySelector('.input-txt');
let addBtn = document.querySelector('.btn-submit');
let taskList = document.querySelector('.todo-list');


inputTask.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTodo(event);
        // console.log('Hello');
    }
});

addBtn.addEventListener('click', addTodo);

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
        checkBtn.innerHTML = '<img src="images/checked.gif"/>';
        checkBtn.classList.add('btn-check');
        todoItem.appendChild(checkBtn);

        let deleteBtn = document.createElement('div');
        deleteBtn.innerHTML = '<img src="images/deleted.gif"/>';
        deleteBtn.classList.add('btn-delete');
        todoItem.appendChild(deleteBtn);

        taskList.appendChild(todoItem);

        inputTask.value = '';
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