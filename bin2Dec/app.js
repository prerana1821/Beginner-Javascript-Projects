// for (let i = bin.length - 1; i >= 0; i--) {
//     dec = dec + bin[i] * Math.pow(2, bin.length - 1 - i);
// }
// console.log(dec);

// console.log(bin);

function convert() {
    const binary = document.getElementById('b-input').value;
    let dec = 0;
    if (binary === '') {
        return alert('Please, Enter a binary number');
    } else {
        binary.split('').map((num) => {
            if (num !== '0' && num !== '1') {
                return alert('Please, enter a binary number');
            }
        });
        for (let i = binary.length - 1; i >= 0; i--) {
            dec = dec + binary[i] * Math.pow(2, binary.length - 1 - i);
        }
        const decimal = dec;
        document.getElementById('d-input').value = decimal;
        return true;
    }
}

// const binary = document.getElementById('b-input').value;
// if (binary === '') return alert('Please, enter a binary number');
// binary.split('').map((char) => {
//     if (char !== '0' && char !== '1') return alert('Please, enter a binary number');
// });
// const decimal = parseInt(binary, 2);
// document.getElementById('d-input').value = decimal;
// return true;