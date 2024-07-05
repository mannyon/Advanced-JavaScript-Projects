function breakTheText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;

    var splittedText = h1Text.split("");
    var halfValue = splittedText.length/2;

    var clutter = "";

    splittedText.forEach(function (elem, idx) {
        if(idx<halfValue){
            clutter += `<span class="a">${elem}</span>`
        }
        else{
            clutter += `<span class="b">${elem}</span>`
        }
    })

    h1.innerHTML = clutter;
}

breakTheText();

gsap.from(".a", {
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    opacity:0
})
gsap.from(".b", {
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0
})

