const hexColorInput = document.getElementById('hex-color-input');
const inputBox = document.getElementById('input-box');

hexColorInput.addEventListener('keyup', () => {
    let hex = hexColorInput.value;
    if (!hex) {
        alert('Please Enter Some Color!')
    } else {
        if (hex.charAt(0) === '#') {
            hex = hex.slice(1);
        } else {

        }
        inputBox.style.backgroundColor = hex;

    }
});

function validateHex(hex) {
    if (hex.charAt(0) === '#') {
        hex = hex.slice(1);
    }
    if (hex.length === 3 || hex.length === 6) {
        // console.log('Yes');
        if (/[^0-9A-F]/i.test(hex)) {
            // console.log('invalid');
            return false;
        } else {
            // console.log('Valid');
            return true;
        }
    }

}
// validateHex('#111');