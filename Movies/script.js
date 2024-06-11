let scrollContainer = document.querySelector("#image-scroll");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    console.log(evt.deltaY);
    scrollContainer.style.scrollBehavior = "auto";
});



