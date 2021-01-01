let allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

let copyOfButtons = [];
for (let i = 0; i < allButtons.length; i++) {
    copyOfButtons.push(allButtons[i].classList[1]);
}
// console.log(copyOfButtons);

function changeButtonColor(choice) {
    if (choice.value === 'red') {
        changeColorRed();
    } else if (choice.value === 'green') {
        changeColorGreen();
    } else if (choice.value === 'reset') {
        changeColorReset();
    } else {
        changeColorRandom();
    }
}

function changeColorRed() {
    for (let i = 0; i < allButtons.length; i++) {
        // console.log(allButtons[i]);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-red');
    }
}

function changeColorGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-green');
    }
}

function changeColorReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyOfButtons[i]);
    }
}

function changeColorRandom() {


    for (let i = 0; i < allButtons.length; i++) {
        let randColors = ['btn-red', 'btn-green', 'btn-blue', 'btn-yellow'];
        let randColor = Math.floor(Math.random() * randColors.length);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(randColors[randColor]);

    }

}