let inputTask = document.querySelector('.input-txt');
let addBtn = document.querySelector('.btn-submit');
let taskList = document.querySelector('.todo-lists');
let date = document.querySelector('.date');
let filterList = document.querySelector('.filter-todo');
let btnDark = document.querySelector('#btn-dark');
let btnLight = document.querySelector('#btn-light');


let dateObject = new Date();
date.innerText = dateObject.toLocaleString();


inputTask.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTodo(event);
    }
});

addBtn.addEventListener('click', addTodo);
taskList.addEventListener('click', checkDelete);
filterList.addEventListener('click', filterTodo);

function addTodo(event) {
    event.preventDefault();

    if (inputTask.value.length <= 0) {
        alert('Please, Enter some text!')
    } else {
        let todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        let leftDiv = document.createElement('div');
        leftDiv.classList.add('left-div');

        let timeP = document.createElement('p');
        timeP.innerText = formatAMPM(new Date);
        timeP.classList.add('time');

        let todoLi = document.createElement('li');
        todoLi.innerText = inputTask.value;
        todoLi.classList.add('todo-list');

        leftDiv.appendChild(timeP);
        leftDiv.appendChild(todoLi);
        todoItem.appendChild(leftDiv);

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
    if (item.classList[0] === 'btn-delete') {
        item.parentElement.classList.add('fall');
        item.parentElement.addEventListener('transitionend', function() {
            item.parentElement.remove();
        });
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


function filterTodo(event) {
    let todos = taskList.children;
    // console.log(todos);
    for (let i = 0; i < todos.length; i++) {
        // console.log(todos[i]);
        switch (event.target.value) {
            case "all":
                todos[i].style.display = "flex";
                break;
            case "completed":
                if (todos[i].classList.contains("task-completed")) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todos[i].classList.contains("task-completed")) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
        }
    }
    // console.log(event.target.value);
    // todos.forEach(function(todo) {
    //     console.log(todo);
    //     console.log('HEllo');
    //     switch (event.target.value) {
    //         case "all":
    //             todo.style.display = "flex";
    //             break;
    //         case "completed":
    //             if (todo.classList.contains("task-completed")) {
    //                 todo.style.display = "flex";
    //             } else {
    //                 todo.style.display = "none";
    //             }
    //             break;
    //         case "uncompleted":
    //             if (!todo.classList.contains("task-completed")) {
    //                 todo.style.display = "flex";
    //             } else {
    //                 todo.style.display = "none";
    //             }
    //     }
    // });
}

let todoTime;

function formatAMPM(date) {
    // console.log(date);
    todoTime = date;
    // console.log(todoTime);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

btnDark.addEventListener('click', function() {
    var all = document.getElementsByTagName("*");
    for (var i = 0, max = all.length; i < max; i++) {
        // console.log(all[i]);
        all[i].classList.add("dark");
    }
})


btnLight.addEventListener('click', function() {
    var all = document.getElementsByTagName("*");
    for (var i = 0, max = all.length; i < max; i++) {
        all[i].classList.remove("dark");
    }
})

// console.log(formatAMPM(new Date));

// function timeDiffCalc(dateFuture, dateNow) {
//     let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

//     // calculate days
//     // const days = Math.floor(diffInMilliSeconds / 86400);
//     // diffInMilliSeconds -= days * 86400;
//     // console.log('calculated days', days);

//     // calculate hours
//     const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
//     diffInMilliSeconds -= hours * 3600;
//     // console.log('calculated hours', hours);

//     // calculate minutes
//     const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
//     diffInMilliSeconds -= minutes * 60;
//     // console.log('minutes', minutes);

//     let difference = '';
//     // if (days > 0) {
//     //     difference += (days === 1) ? `${days} day, ` : `${days} days, `;
//     // }

//     difference += (hours === 0 || hours === 1) ? `${hours} hr, ` : `${hours} hr, `;

//     difference += (minutes === 0 || hours === 1) ? `${minutes} min` : `${minutes} min`;

//     return difference;
// }

// console.log(timeDiffCalc(new Date(), todoTime));

// the time difference is:
// 1 day, 14 hours, 10 minutes


// function addTodo(event) {
//     event.preventDefault();

//     if (inputTask.value.length <= 0) {
//         alert('Please, Enter some text!')
//     } else {
//         let todoItem = document.createElement('div');
//         todoItem.classList.add('todo-item');

//         let leftDiv = document.createElement('div');
//         leftDiv.classList.add('left-div');

//         let timeP = document.createElement('p');
//         timeP.innerText = formatAMPM(new Date);
//         timeP.classList.add('time');

//         // let diffTime = document.createElement('span');
//         // diffTime.innerText = timeDiffCalc(new Date(), todoTime);
//         // diffTime.classList.add('diff-time');

//         // timeP.appendChild(diffTime);

//         let todoLi = document.createElement('li');
//         todoLi.innerText = inputTask.value;
//         todoLi.classList.add('todo-list');

//         leftDiv.appendChild(timeP);
//         leftDiv.appendChild(todoLi);
//         todoItem.appendChild(leftDiv);
//         // todoItem.appendChild(todoLi);

//         let checkBtn = document.createElement('div');
//         checkBtn.innerHTML = '<img class="btn-check-img" src="images/checked.gif"/>';
//         checkBtn.classList.add('btn-check');
//         todoItem.appendChild(checkBtn);

//         let deleteBtn = document.createElement('div');
//         deleteBtn.innerHTML = '<img class="btn-delete-img" src="images/deleted.gif"/>';
//         deleteBtn.classList.add('btn-delete');
//         todoItem.appendChild(deleteBtn);

//         taskList.appendChild(todoItem);

//         inputTask.value = '';
//     }
// }

// function checkDelete(event) {
//     let item = event.target;
//     // console.log(item);
//     if (item.classList[0] === 'btn-delete') {
//         // console.log(event.target.parentElement);
//         // event.target.parentElement.remove();
//         item.parentElement.classList.add('fall');
//         item.parentElement.addEventListener('transitionend', function () {
//             item.parentElement.remove();
//         });
//     } else if (item.classList[0] === 'btn-check') {
//         item.parentElement.classList.toggle('task-completed');
//     }
// }