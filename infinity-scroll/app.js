let inputImg = document.querySelector('#input-img');
let searchBtn = document.querySelector('#search-btn');
let imageContainer = document.querySelector('.image-container');
let selectList = document.getElementById("select-list");
let loader = document.querySelector('#loader');

// let apiKey = '563492ad6f917000010000013399437d33f545b6ad303f4f00c8745c';
// let apiKey = '563492ad6f91700001000001eea6e7a56c3a4c8eb856a6ad623afa26';
let apiKey = '563492ad6f917000010000017d374ccff7504daf914afcf880774e85';

// "https://api.pexels.com/v1/search?query=nature&per_page=1"
function contructURL(imgQuery) {
    return "https://api.pexels.com/v1/search?query=" + imgQuery + "&per_page=10";
}

searchBtn.addEventListener('click', getImages());


function getImages() {
    return function() {
        // console.log(inputImg.value);
        if (inputImg.value === '') {
            alert('Please Enter some Text!');
        } else {
            imageContainer.innerHTML = '';
            fetch(contructURL(inputImg.value), {
                    method: 'GET',
                    headers: {
                        'Authorization': apiKey,
                    },
                    body: JSON.stringify(),
                })
                .then(response => response.json())
                .then(function(data) {
                    let photos = data.photos;
                    // console.log(photos);
                    photos.forEach(photo => {
                        let link = document.createElement('a');
                        link.setAttribute('href', photo.url);
                        link.setAttribute('target', '_blank');
                        link.setAttribute('title', photo.photographer)
                        let img = document.createElement('img');
                        img.setAttribute('src', photo.src.original);
                        img.setAttribute('alt', photo.photographer);
                        img.setAttribute('title', photo.photographer);
                        img.setAttribute('class', 'photos');

                        let div = document.createElement('div');
                        // img.appendChild(link);
                        // imageContainer.appendChild(img);
                        loader.className = 'show';
                        imageContainer.className = 'hide';
                        setTimeout(function() {
                            loader.className = loader.className.replace("show", "");
                            imageContainer.className = imageContainer.className.replace("hide", "image-container");
                            link.appendChild(img);
                            div.appendChild(link);
                            imageContainer.appendChild(div);
                        }, 2000);

                        console.log(img);
                        console.log(link);
                    });
                }).catch(function errorHandling(error) {
                    console.log(error);
                    alert('To Many Request, Please try again later');
                });
        }

    };
}

let selectedValue = '';
selectList.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "LI") {
        // console.log(e.target.id);
        selectedValue = e.target.id;
        imageContainer.innerHTML = '';
        fetch(contructURL(selectedValue), {
                method: 'GET',
                headers: {
                    'Authorization': apiKey,
                },
                body: JSON.stringify(),
            })
            .then(response => response.json())
            .then(function(data) {
                let photos = data.photos;
                // console.log(photos);
                photos.forEach(photo => {
                    let link = document.createElement('a');
                    link.setAttribute('href', photo.url);
                    link.setAttribute('target', '_blank');
                    link.setAttribute('title', photo.photographer)
                    let img = document.createElement('img');
                    img.setAttribute('src', photo.src.original);
                    img.setAttribute('alt', photo.photographer);
                    img.setAttribute('title', photo.photographer);
                    img.setAttribute('class', 'photos');

                    let div = document.createElement('div');
                    // img.appendChild(link);
                    // imageContainer.appendChild(img);
                    // link.appendChild(img);
                    // div.appendChild(link);
                    // imageContainer.appendChild(div)

                    loader.className = 'show';
                    imageContainer.className = 'hide';
                    setTimeout(function() {
                        loader.className = loader.className.replace("show", "");
                        imageContainer.className = imageContainer.className.replace("hide", "image-container");
                        link.appendChild(img);
                        div.appendChild(link);
                        imageContainer.appendChild(div);
                    }, 2000);
                    // console.log(img);
                    // console.log(link);
                });
            }).catch(function errorHandling(error) {
                console.log(error);
                alert('To Many Request, Please try again later');
            });
    }
});

// if (selectedValue.length >= 0) {
//     window.addEventListener('scroll', () => {
//         if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
//             // fetch(contructURL(inputImg.value === '' ? inputImg.value : e.target.id), {
//             fetch(contructURL(selectedValue), {
//                     method: 'GET',
//                     headers: {
//                         'Authorization': apiKey,
//                     },
//                     body: JSON.stringify(),
//                 })
//                 .then(response => response.json())
//                 .then(function(data) {
//                     let photos = data.photos;
//                     // console.log(photos);
//                     photos.forEach(photo => {
//                         let link = document.createElement('a');
//                         link.setAttribute('href', photo.url);
//                         link.setAttribute('target', '_blank');
//                         link.setAttribute('title', photo.photographer)
//                         let img = document.createElement('img');
//                         img.setAttribute('src', photo.src.original);
//                         img.setAttribute('alt', photo.photographer);
//                         img.setAttribute('title', photo.photographer);
//                         img.setAttribute('class', 'photos');
//                         let div = document.createElement('div');
//                         link.appendChild(img);
//                         div.appendChild(link);
//                         imageContainer.appendChild(div);
//                         // console.log(img);
//                         // console.log(link);
//                     });
//                 });
//         }
//     });

// }


// window.addEventListener('scroll', () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
//         // fetch(contructURL(inputImg.value === '' ? inputImg.value : e.target.id), {
//         fetch(contructURL(inputImg.value), {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': apiKey,
//                 },
//                 body: JSON.stringify(),
//             })
//             .then(response => response.json())
//             .then(function(data) {
//                 let photos = data.photos;
//                 // console.log(photos);
//                 photos.forEach(photo => {
//                     let link = document.createElement('a');
//                     link.setAttribute('href', photo.url);
//                     link.setAttribute('target', '_blank');
//                     link.setAttribute('title', photo.photographer)
//                     let img = document.createElement('img');
//                     img.setAttribute('src', photo.src.original);
//                     img.setAttribute('alt', photo.photographer);
//                     img.setAttribute('title', photo.photographer);
//                     img.setAttribute('class', 'photos');
//                     let div = document.createElement('div');
//                     link.appendChild(img);
//                     div.appendChild(link);
//                     imageContainer.appendChild(div);
//                     // console.log(img);
//                     // console.log(link);
//                 });
//             });
//     }
// });