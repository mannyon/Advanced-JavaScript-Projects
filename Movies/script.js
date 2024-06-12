let scrollContainer = document.querySelector(".gallery");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
//     console.log(evt.deltaY);
//     scrollContainer.style.scrollBehavior = "auto";
// });

// const images = document.querySelectorAll('#images-scroll img');

// function scaleImage(event) {
//     images.forEach(img => {
//         // Remove the scale-up class from all images
//         img.classList.remove('scale-up');
//         img.classList.add('allScale')
//         img.removeAttribute('id');
//     });

//     // Add the scale-up class to the clicked image
//     event.target.classList.add('scale-up');
//     console.log(event.target);
// }

// images.forEach(img => {
//     img.addEventListener('click', scaleImage);
// });