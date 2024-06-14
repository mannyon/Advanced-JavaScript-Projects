const images = document.querySelectorAll('#images-scroll img');
const allImages = document.getElementsByClassName("allImages");
const container = document.querySelector('.container');
const watchTrailerBtn = document.getElementById('watch-trailer-btn');
const crossBtn = document.querySelector('.cross-btn');
let imgContainer = document.getElementById('imgMovie65');

document.getElementById('movie65').style.scale = '1.2';
document.getElementById('movie65').style.transition = 'all 0.3s';

function scaleImage(event) {
    document.getElementById('movie65').style.scale = '';
    
    images.forEach(img => {
        img.classList.remove('scale-up');
        if(event.target === img){
            imgContainer = img;
        }
    });
    event.target.classList.add('scale-up');
    if(imgContainer.src.includes('the-black-demon')){
        container.style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('moviesImages/bg-the-black-demon.jpeg') no-repeat center center/cover";
        document.getElementById('title-logo').src = 'images/the-black-demon-title.png';
        document.getElementById('rating').innerHTML = '16+';
        document.getElementById('duration').innerHTML = '1h 40min';
        document.getElementById('genre').innerHTML = 'Thriller';
        document.getElementById('description').innerHTML = "Oilman Paul Sturges' idyllic family vacation turns into a living nightmare when they encounter a gigantic megalodon shark that will stop at nothing to protect its territory. Stranded and under constant attack, Paul and his family must somehow find a way to get back to shore alive before it strikes again.";
    }
    if(imgContainer.src.includes('the-covenant')){
        container.style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('moviesImages/bg-the-covenant.jpeg') no-repeat center center/cover";
        document.getElementById('title-logo').src = 'images/the-covenant-title.png';
        document.getElementById('rating').innerHTML = '12+';
        document.getElementById('duration').innerHTML = '2h 03min';
        document.getElementById('genre').innerHTML = 'War/Action';
        document.getElementById('description').innerHTML = "The Covenant is a 2023 war action film set in the Afghanistan War. It tells the story of a U.S. Army Sergeant, John Kinley, and his Afghan interpreter, Ahmed.The film explores the bond between soldier and interpreter, tested when Ahmed risks his life to save Kinley's.";

    }
    if(imgContainer.src.includes('65')){
        container.style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('moviesImages/bg-65.jpeg') no-repeat center center/cover";
        document.getElementById('title-logo').src = 'images/the-65-title.png';
        document.getElementById('rating').innerHTML = '15+'
        document.getElementById('duration').innerHTML = '1h 33min';
        document.getElementById('genre').innerHTML = 'Action';
        document.getElementById('description').innerHTML = "A spaceship crashes on an unknown planet, only to discover he's actually stranded on prehistoric Earth 65 million years ago. Battling the harsh environment and dangerous creatures, Mills must use his skills and ingenuity to survive and find a way back home. The film blends intense action with the suspense of survival in an unfamiliar, hostile world.";
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/bHXejJq5vr0?si=DgdsH8DeDlItHAbP';
    }
    if(imgContainer.src.includes('little-mermaid')){
        container.style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('moviesImages/bg-little-mermaid.jpg') no-repeat center center/cover";
        document.getElementById('title-logo').src = 'images/the-little-mermaid-title.png';
        document.getElementById('rating').innerHTML = '12+'
        document.getElementById('duration').innerHTML = '2h 14min'; 
        document.getElementById('genre').innerHTML = 'Romance'; 
        document.getElementById('description').innerHTML = "The youngest of King Triton's daughters, Ariel is a beautiful and spirited young mermaid with a thirst for adventure. Longing to find out more about the world beyond the sea, Ariel visits the surface and falls for the dashing Prince Eric. Following her heart, she makes a deal with the evil sea witch, Ursula, to experience life on land."; 
    }
    if(imgContainer.src.includes('the-tank')){
        container.style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('moviesImages/bg-the-tank.jpeg') no-repeat center center/cover";
        document.getElementById('title-logo').src = 'images/the-tank-title.png';
        document.getElementById('rating').innerHTML = '15+'
        document.getElementById('duration').innerHTML = '1h 40min';
        document.getElementById('genre').innerHTML = 'Horror';
        document.getElementById('description').innerHTML = "A family inherits a beautiful coastal property with a dark secret.  The husband, Ben, discovers a hidden water tank and while investigating, awakens a terrifying, ancient creature lurking within.  This unleashes chaos as the family fights for survival against the monstrous beings.";
    }
}

images.forEach(img => {
    img.addEventListener('click', scaleImage);
});

function watchTrailer() {
    document.querySelector('.youtube-container').style.display = 'block';
    if(imgContainer.src.includes('65')){
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/bHXejJq5vr0?si=DgdsH8DeDlItHAbP';
    }
    if(imgContainer.src.includes('the-tank')){
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/23GmhsmrCIo?si=8S5NMoukpNqMX7_1';
    }
    if(imgContainer.src.includes('little-mermaid')){
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/kpGo2_d3oYE?si=Cerz2Zgl9OXTQZ2Y';
    }
    if(imgContainer.src.includes('the-covenant')){
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/02PPMPArNEQ?si=BZiKrghSiiabs7J9';
    }
    if(imgContainer.src.includes('the-black-demon')){
        document.getElementById('iframe').src = 'https://www.youtube.com/embed/z1xJAyVKAPY?si=B4sUwbCTl00h4q1Z';
    }
}

crossBtn.addEventListener('click', function() {
    document.querySelector('.youtube-container').style.display = 'none';
    document.getElementById('iframe').src = '';
})



