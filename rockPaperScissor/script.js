function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = computerChoice();
    let results = decideWinner(humanChoice, botChoice);
    let message = finalMessage(results);
    rpsFrontEnd(humanChoice, botChoice, message);
}

function computerChoice() {
    let elements = ['rock', 'paper', 'scissor']
    let ranElement = Math.floor(Math.random() * elements.length);
    let result = elements[ranElement];
    return result;
}

function decideWinner(hChoice, bChoice) {

    let rpsDB = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 },
    };

    var humanChoice = rpsDB[hChoice][bChoice];
    var compChoice = rpsDB[bChoice][hChoice];
    return [humanChoice, compChoice];
}

function finalMessage(results) {
    if (results[0] === 1) {
        return { 'message': 'You Won!', 'color': 'green' };
    } else if (results[0] === 0) {
        return { 'message': 'You Loose!', 'color': 'red' };
    } else {
        return { 'message': 'It\'s a Tie!', 'color': 'yellow' };
    }
}

function rpsFrontEnd(hChoice, bChoice, msg) {
    let imgDB = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humanImg = document.createElement('div');
    let message = document.createElement('div');
    let botImg = document.createElement('div');

    humanImg.innerHTML = "<img src='" + imgDB[hChoice] + "' width='150' height='150' style='box-shadow: 0px 10px 50px blue;'>";
    message.innerHTML = "<h1 style='color: " + msg['color'] + "; font-size: 60px padding=10px; '>" + msg['message'] + "</h1>";
    botImg.innerHTML = "<img src='" + imgDB[bChoice] + "' width='150' height='150' style='box-shadow: 0px 10px 50px red;'>";

    document.getElementById('img-div').appendChild(humanImg);
    document.getElementById('img-div').appendChild(message);
    document.getElementById('img-div').appendChild(botImg);
}

// function rpsGame(yourChoice) {
//     // console.log(yourChoice);
//     let humanChoice, botChoice;
//     humanChoice = yourChoice.id;
//     // console.log(humanChoice);
//     botChoice = computerChoice();
//     let results = decideWinner(humanChoice, botChoice);
//     let message = finalMessage(results);
//     // console.log(message);
//     rpsFrontEnd(humanChoice, botChoice, message);
// }

// function computerChoice() {
//     let elements = ['rock', 'paper', 'scissor']
//     let ranElement = Math.floor(Math.random() * elements.length);
//     // return ranElement;
//     let result = elements[ranElement];
//     return result;
// }
// // botChoic = botChoice();
// // console.log(botChoic);

// // rock wins to scissor
// // scissor wins to paper
// // paper wins to rock

// function decideWinner(hChoice, bChoice) {

//     let rpsDB = {
//         'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
//         'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
//         'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 },
//     };

//     var humanChoice = rpsDB[hChoice][bChoice];
//     var compChoice = rpsDB[bChoice][hChoice];
//     return [humanChoice, compChoice];

//     // if (hChoice === rock && bChoice === scissor) {
//     //     return [1, 0];
//     // } else if (hChoice === scissor && bChoice === paper) {
//     //     return [1, 0];
//     // } else if (hChoice === paper && bChoice === rock) {
//     //     return [1, 0];
//     // } else if (hChoice === scissor && bChoice === rock) {
//     //     return [0, 1];
//     // } else if (hChoice === paper && bChoice === scissor) {
//     //     return [0, 1];
//     // } else if (hChoice === rock && bChoice === paper) {
//     //     return [0, 1];
//     // } else if (hChoice === rock && bChoice === rock) {
//     //     return [0.5, 0.5];
//     // } else if (hChoice === paper && bChoice === paper) {
//     //     return [0.5, 0.5];
//     // } else if (hChoice === scissor && bChoice === scissor) {
//     //     return [0.5, 0.5];
//     // }
// }

// function finalMessage(results) {
//     if (results[0] === 1) {
//         return { 'message': 'You Won!', 'color': 'green' };
//     } else if (results[0] === 0) {
//         return { 'message': 'You Loose!', 'color': 'red' };
//     } else {
//         return { 'message': 'It\'s a Tie!', 'color': 'yellow' };
//     }
// }

// // function finalMessage([humanChoice, compChoice]) {
// //     if (humanChoice === 1) {
// //         return { 'message': 'You Won!', 'color': 'green' };
// //     } else if (humanChoice === 0) {
// //         return { 'message': 'You Loose!', 'color': 'red' };
// //     } else {
// //         return { 'message': 'It\'s a Tie!', 'color': 'yellow' };
// //     }
// // }

// function rpsFrontEnd(hChoice, bChoice, msg) {
//     let imgDB = {
//         'rock': document.getElementById('rock').src,
//         'paper': document.getElementById('paper').src,
//         'scissor': document.getElementById('scissor').src,
//     }

//     document.getElementById('rock').remove();
//     document.getElementById('paper').remove();
//     document.getElementById('scissor').remove();

//     let humanImg = document.createElement('div');
//     let message = document.createElement('div');
//     let botImg = document.createElement('div');


//     // <img id="paper" src="images/paper.png" onclick="rpsGame(this)" width="150" height="150">
//     // </img>
//     humanImg.innerHTML = "<img src='" + imgDB[hChoice] + "' width='150' height='150' style='box-shadow: 0px 10px 50px blue;'>";
//     message.innerHTML = "<h1 style='color: " + msg['color'] + "; font-size: 60px padding=10px; '>" + msg['message'] + "</h1>";
//     botImg.innerHTML = "<img src='" + imgDB[bChoice] + "' width='150' height='150' style='box-shadow: 0px 10px 50px red;'>";

//     document.getElementById('img-div').appendChild(humanImg);
//     document.getElementById('img-div').appendChild(message);
//     document.getElementById('img-div').appendChild(botImg);
// }