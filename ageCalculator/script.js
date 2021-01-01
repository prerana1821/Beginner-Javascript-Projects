function getAge() {
    var dateString = prompt("Enter your Age in YYYY-MM-DD format");
    if (dateString === '') {
        return alert("Please, Enter a Value");
    }
    var regEx = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateString.match(regEx)) {
        return alert("Please, Enter a Valid Format!")
    }
    var today = new Date();
    var birthDate = new Date(dateString);
    console.log(birthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    console.log(age);
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    months = age * 12;
    days = age * 365;

    // return [age, age * 365, age * 12];
    const h3 = document.createElement("h3");

    var textNode = document.createTextNode("You are " + age + ' years, ' + days + ' days, ' + months + ' months ' + 'old!');

    // console.log(textNode);

    h3.appendChild(textNode);

    h3.setAttribute('id', "h3")
    display = document.getElementById('result');

    display.appendChild(h3);

}

// let result = getAge();
// console.log('age: ' + getAge("2003/03/18"));


function reset() {
    document.getElementById('h3').remove();
}



// console.log(colors[randomColors]);

function setColor() {
    let colors = ['green', 'pink', 'yellow', 'red', 'Fuchsia'];

    let randomColors = Math.floor(Math.random() * colors.length)
    heading.style.backgroundColor = colors[randomColors];
    // element.style.backgroundColor = color;
}














// var dob = '19800810'; 
// var dob = '20030318';
// var year = Number(dob.substr(0, 4));
// var month = Number(dob.substr(4, 2)) - 1;
// var day = Number(dob.substr(6, 2));
// var today = new Date();
// var age = today.getFullYear() - year;
// if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
//     age--;
// }
// console.log(age);

// console.log((2020 - 2003) * 365);

// var today = new Date();
// console.log(today);