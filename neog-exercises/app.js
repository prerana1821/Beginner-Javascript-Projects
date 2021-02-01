let userName = document.querySelector('#username');
let dispayUserName = document.querySelector('#greet');
let date = document.querySelector('#date');
let btnLeap = document.querySelector('#leap-year');
let btnPrime = document.querySelector('#prime-number');
let output = document.querySelector('#output');
let reset = document.querySelector('#reset');
let tweet = document.querySelector('#tweet');

userName.addEventListener('input', function() {
    dispayUserName.innerText = `${userName.value}, let's see whether you are born on a Leap Year or your birth date is a Prime Number`;

})

// date.addEventListener('change', leapYear());

btnLeap.addEventListener('click', function leapYear() {
    let input = date.value;
    if (userName.value.length === 0) {
        console.log(userName.value.length);
        output.innerText = `First, Please Enter your Name`;
    } else if (input.length == 0) {
        output.innerText = `Please Enter a Birth Date`;
    } else {
        let split = input.split('-');
        let yearString = split[0];
        let year = parseInt(yearString);
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();

        if (year >= 1000 && year <= currentYear) {
            if (year % 400 === 0 || year % 4 === 0) {
                output.innerText = `Congratulations, ${userName.value} you were born in a Leap Year!! \n Thank you ${userName.value} for playing this game. Do share a your experience by Tweeting it!!`;
            } else if (year % 100 === 0) {
                output.innerText = `Sorry, ${userName.value} you were not born in a Leap Year!! \n Thank you ${userName.value} for playing this game.`;
            } else {
                output.innerText = `Sorry, ${userName.value} you were not born in a Leap Year!! \n Thank you ${userName.value} for playing this game.`;
            }
        } else {
            console.log(userName.value.length);
            if (userName.value.length === 0) {
                console.log(userName.value.length);
                output.innerText = `First, Please Enter your Name`;
            } else {
                output.innerText = `${userName.value}, Please Enter a Valid Birth Date`;
            }
        }
    }
});

btnPrime.addEventListener('click', function primeNumber() {

    let input = date.value;
    if (userName.value.length === 0) {
        // console.log(userName.value.length);
        output.innerText = `First, Please Enter your Name`;
    } else if (input.length == 0) {
        output.innerText = `Please Enter a Birth Date`;
    } else {
        let enteredDate = new Date(input);
        // console.log(enteredDate);
        let date = enteredDate.getDate();
        let currentDate = new Date();
        // console.log(currentDate);
        if (currentDate.getDate() + 1 <= enteredDate.getDate()) {
            output.innerText = `${userName.value}, Please Enter a Valid Birth Date`;
        } else {
            let count = 0;
            for (let i = 2; i <= date; i++) {
                if (date % i === 0) {
                    count++;
                }
            }
            if (count < 2) {
                output.innerText = `Congratulations, ${userName.value} your Birth Date ${date} is a Prime Number!! \n Thank you ${userName.value} for playing this game. Do share a your experience by Tweeting it!!`;
            } else {
                output.innerText = `Sorry, ${userName.value} your Birth Date ${date} is not a Prime Number!! \n Thank you ${userName.value} for playing this game.`;
            }
        }
    }
});

reset.addEventListener('click', function() {
    date.value = '';
    output.innerText = '';
    userName.value = '';
    dispayUserName.innerText = '';
});

tweet.addEventListener('click', function() {
    let message = output.textContent;
    // console.log(message);
    if (message === '') {
        output.innerText = `Please Enter a Birth Date!`;
        // alert('Please Enter the Birth Date!');
    } else {
        let twitterUrl = `https://twitter.com/intent/tweet?text=${message}`;
        window.open(twitterUrl, '_blank')
    }
});

// <a id="tweet"
//     href="https://twitter.com/share?ref_src=twsrc%5Etfw"
//     class="twitter-share-button"
//     data-text="I&#39;m publicly committing to the #151daysofcode challenge by @neogcamp.&#13;&#13;Join and learn with me 👇&#13;http://neog.camp/&#13;&#13;#151daysofcode #neogcamp"
//     data-url=""
//     data-lang="en"
//     data-show-count="false"
// >Yes, I'm IN!</a
// >

// tweet.addEventListener('click', function () {
//     let message = `I'm publicly committing to the &#x23;151daysofcode challenge by @neogcamp.
//     Join and learn with me 👇
//     https://neog.camp/;
//     #151daysofcode #neogcamp`;

//     let twitterUrl = `https://twitter.com/intent/tweet?text=${message}`;
//     window.open(twitterUrl, '_blank');

// });