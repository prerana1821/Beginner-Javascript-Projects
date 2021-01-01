function generateImg() {
    let img = document.createElement('img');
    // img.setAttribute('src', 'download.jfif');
    //OR
    img.src = 'download.jfif';
    let container = document.getElementById('container');
    container.appendChild(img);

}