// function isValidDate(d) {
//     return d instanceof Date && !isNaN(d);
// }

// let date = isValidDate('2002/03/18');
// console.log(date);

// let d = '2002/03/18';

// if (Object.prototype.toString.call(d) === "[object Date]") {
//     // it is a date
//     if (isNaN(d.getTime())) { // d.valueOf() could also work
//         // date is not valid
//         console.log('False');
//     } else {
//         // date is valid
//         console.log('True');
//     }
// } else {
//     console.log('False');
//     // not a date
// }

// Date.prototype.isValid = function() {
//     // An invalid date object returns NaN for getTime() and NaN is the only
//     // object not strictly equal to itself.
//     return this.getTime() === this.getTime();
// };

// let d = new Date("2002/09/44");

// console.log(d.isValid());

// const findNearestPalindrome = num => {
//     const strNum = String(num);
//     const half = strNum.substring(0, Math.floor(strNum.length / 2));
//     const reversed = half.split("").reverse().join("");
//     const first = strNum.length % 2 === 0 ? half : strNum.substring(0,
//         Math.ceil(strNum.length / 2))
//     return +(first + reversed);
// };

function findNearestPalindrome(num) {
    const strNum = String(num);
    const half = strNum.substring(0, Math.floor(strNum.length / 2));
    const reversed = half.split("").reverse().join("");
    const first = strNum.length % 2 === 0 ? half : strNum.substring(0,
        Math.ceil(strNum.length / 2))
    return +(first + reversed);
}

console.log(findNearestPalindrome('20170723'));