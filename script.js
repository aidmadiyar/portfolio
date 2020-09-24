for (let pixel of pixels) {
    pixel.onclick = function () {
        if (eraser.checked) {
            pixel.style.backgroundColor = 'white';
        } else {
            pixel.style.backgroundColor = chosenColor.value;
        }
    }
};

for (let pixel of pixels) {
    pixel.onclick = function () {
        if (eraser.checked) {
            pixel.style.backgroundColor = 'white'
        } else {
            pixel.style.backgroundColor = chosenColor.value;
        }
    }
};