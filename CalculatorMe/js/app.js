const inputBtn = document.getElementById('user-input');
const addBtn = document.getElementById('add-btn');
const subBtn = document.getElementById('sub-btn');
const mulBtn = document.getElementById('mul-btn');
const divBtn = document.getElementById('div-btn');

const calculatedDesc = document.getElementById('calculated-input');
const calculatedResult = document.getElementById('result-input');
const historyOutput = document.getElementById('history');

function outputResult(calculatedDescrip, calcResult) {
    calculatedDesc.innerHTML = calculatedDescrip;
    calculatedResult.innerHTML = calcResult;
}

let currentResult = 0;
let entries = [];
let entry = {};

function history(operator, prevValue, userValue, result) {
    entry = {
        Operation: operator,
        InitialValue: prevValue,
        InputValue: userValue,
        Result: result
    };
    entries.push(entry);

    // console.log(entries);
    // for (i = 0; i < entries.length; i++) {
    // historyOutput.innerHTML = entries[i].initialValue + " " + entries[i].operation + " " + entries[i].inputValue + " = " + entries[i].result;
    // }

    var parsed = "";
    for (i = 0; i < entries.length; i++) {
        var myobj = entries[i];
        for (var property in myobj) {
            parsed += property + ": " + myobj[property] + ", ";
        }
    }
    historyOutput.textContent = parsed;
}

function add() {
    let initialResult = currentResult;
    let inputValue = parseInt(inputBtn.value);
    currentResult = currentResult + inputValue;
    calcDesc = `${initialResult} + ${inputValue}`;
    outputResult(calcDesc, currentResult);
    history('ADD', initialResult, inputValue, currentResult);
}

function subtract() {
    let initialResult = currentResult;
    let inputValue = parseInt(inputBtn.value);
    currentResult = currentResult - inputValue;
    calcDesc = `${initialResult} - ${inputValue}`;
    outputResult(calcDesc, currentResult);
    history('SUBTRACT', initialResult, inputValue, currentResult);
}

function multiply() {
    let initialResult = currentResult;
    let inputValue = parseInt(inputBtn.value);
    currentResult = currentResult * inputValue;
    calcDesc = `${initialResult} * ${inputValue}`;
    outputResult(calcDesc, currentResult);
    history('MULTIPLE', initialResult, inputValue, currentResult);

}

function divide() {
    let initialResult = currentResult;
    let inputValue = parseInt(inputBtn.value);
    currentResult = currentResult / inputValue;
    calcDesc = `${initialResult} / ${inputValue}`;
    outputResult(calcDesc, currentResult)
    history('DIVIDE', initialResult, inputValue, currentResult);
}


addBtn.addEventListener('click', add);
subBtn.addEventListener('click', subtract);
mulBtn.addEventListener('click', multiply);
divBtn.addEventListener('click', divide);