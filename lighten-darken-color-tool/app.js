// const hexColorInput = document.getElementById('hex-color-input');
// const inputBox = document.getElementById('input-box');
// const errorText = document.getElementById('error');
// const btnColor = document.getElementById('btn-enter-color');
// const sliderText = document.getElementById('slider-text');
// const slider = document.getElementById('slider');

// btnColor.addEventListener('click', validateHexInput);

// hexColorInput.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         validateHexInput(event);
//     }
// });

// function validateHexInput() {
//     let hex = hexColorInput.value;
//     if (!hex) {
//         alert('Please Enter Some Color!');
//     } else {
//         if (hex.charAt(0) !== '#') {
//             hex = '#' + hex;
//         }
//         if (/^#[0-9A-F]{6}$/i.test(hex) || /^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
//             inputBox.style.backgroundColor = hex;
//         } else {
//             alert('Enter Valid Hex Color');
//         }
//         if (hex > 7) {
//             alert('Enter Valid Hex Color');
//         }
//     }
// }

// const hexToRGB = (hex) => {
//     let strippedHex = hex.replace('#', '');

//     if (strippedHex.length === 3) {
//         strippedHex = strippedHex[0] + strippedHex[0] +
//             strippedHex[1] + strippedHex[1] +
//             strippedHex[2] + strippedHex[2];
//     }

//     const r = parseInt(strippedHex.substring(0, 2), 16);
//     const g = parseInt(strippedHex.substring(2, 4), 16);
//     const b = parseInt(strippedHex.substring(4, 6), 16);

//     return { r, g, b }

// }

// function rgbToHex(r, g, b) {
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// slider.addEventListener('input', function() {
//     sliderText.innerText = slider.value + '%';
// });

// // function alterColor(hex, percentage) {
// //     let rgb = hexToRGB(hex);
// //     let inc =
// // }

// // hexColorInput.addEventListener('keyup', () => {
// //     let hex = hexColorInput.value;
// //     if (!hex) {
// //         alert('Please Enter Some Color!')
// //     } else {
// //         if (hex.charAt(0) !== '#') {
// //             hex = '#' + hex;
// //         }
// //         if (/^#[0-9A-F]{6}$/i.test(hex) || /^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
// //             inputBox.style.backgroundColor = hex;
// //         } else {
// //             // if (hex > 7) {
// //             //     alert('Enter Valid Hex Color');
// //             //     // errorText.innerText = 'Enter Valid Hex Color';
// //             // }
// //             // if (!inputBox.style.backgroundColor) {
// //             //     errorText.innerText = '';
// //             // } else {
// //             //     errorText.innerText = 'Enter Valid Hex Color'
// //             // }
// //         }
// //         if (hex > 7) {
// //             console.log('Hl');
// //             alert('Enter Valid Hex Color');
// //             // errorText.innerText = 'Enter Valid Hex Color';
// //         }
// //     }
// // });

// // function validateHex(hex) {
// //     if (hex.charAt(0) === '#') {
// //         hex = hex.slice(1);
// //     }
// //     if (hex.length === 3 || hex.length === 6) {
// //         // console.log('Yes');
// //         if (/[^0-9A-F]/i.test(hex)) {
// //             // console.log('invalid');
// //             return false;
// //         } else {
// //             // console.log('Valid');
// //             return true;
// //         }
// //     }

// // }
// // validateHex('#111');

const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');
const alteredColor = document.getElementById('alteredColor');
const alteredColorText = document.getElementById('alteredColorText');
const slider = document.getElementById('slider');
const sliderText = document.getElementById('sliderText');
const lightenText = document.getElementById('lightenText');
const darkenText = document.getElementById('darkenText');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    if (toggleBtn.classList.contains('toggled')) {
        toggleBtn.classList.remove('toggled');
        lightenText.classList.remove('unselected');
        darkenText.classList.add('unselected');
    } else {
        toggleBtn.classList.add('toggled');
        lightenText.classList.add('unselected');
        darkenText.classList.remove('unselected');
    }
    reset();
})

hexInput.addEventListener('keyup', () => {

    const hex = hexInput.value;
    if (!isValidHex(hex)) return;

    const strippedHex = hex.replace('#', '');

    inputColor.style.backgroundColor = "#" + strippedHex;
    reset();
})

const isValidHex = (hex) => {
    if (!hex) return false;

    const strippedHex = hex.replace('#', '');
    return strippedHex.length === 3 || strippedHex.length === 6;
}



const convertHexToRGB = (hex) => {
    if (!isValidHex(hex)) return null;

    let strippedHex = hex.replace('#', '');

    if (strippedHex.length === 3) {
        strippedHex = strippedHex[0] + strippedHex[0] +
            strippedHex[1] + strippedHex[1] +
            strippedHex[2] + strippedHex[2];
    }

    const r = parseInt(strippedHex.substring(0, 2), 16);
    const g = parseInt(strippedHex.substring(2, 4), 16);
    const b = parseInt(strippedHex.substring(4, 6), 16);

    return { r, g, b };
}

const convertRGBToHex = (r, g, b) => {
    const firstPair = ("0" + r.toString(16)).slice(-2);
    const secondPair = ("0" + g.toString(16)).slice(-2);
    const thirdPair = ("0" + b.toString(16)).slice(-2);

    const hex = "#" + firstPair + secondPair + thirdPair;
    return hex;
}

const alterColor = (hex, percentage) => {
    const { r, g, b } = convertHexToRGB(hex);

    const amount = Math.floor((percentage / 100) * 255);

    const newR = increaseWithin0To255(r, amount);
    const newG = increaseWithin0To255(g, amount);
    const newB = increaseWithin0To255(b, amount)
    return convertRGBToHex(newR, newG, newB);
}

const increaseWithin0To255 = (hex, amount) => {
    // const newHex = hex + amount;
    // if(newHex > 255) return 255;
    // if(newHex < 0) return 0;
    // return newHex;
    return Math.min(255, Math.max(0, hex + amount));
}

alterColor("fff", 10)

slider.addEventListener('input', () => {
    if (!isValidHex(hexInput.value)) return;

    sliderText.textContent = `${slider.value}%`;
    //calulcate the appropriate value for the color alteration
    //between positive and negative
    const valueAddition =
        toggleBtn.classList.contains('toggled') ?
        -slider.value :
        slider.value;

    const alteredHex = alterColor(hexInput.value, valueAddition);
    alteredColor.style.backgroundColor = alteredHex;
    alteredColorText.innerText = `Altered Color ${alteredHex}`;
})

const reset = () => {
    slider.value = 0;
    sliderText.innerText = `0%`;
    alteredColor.style.backgroundColor = hexInput.value;
    alteredColorText.innerText = `Altered Color ${hexInput.value}`;

}