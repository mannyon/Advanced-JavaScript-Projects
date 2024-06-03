// api key = a91befe6f2c141b08f72e00d25a62951;

let hero = document.querySelector(".hero");
let inputBtn = document.getElementById("inputBtn");
let inputBox = document.getElementById("inputBox");
let searchDes = "tesla";
let url = `https://newsapi.org/v2/everything?q=${searchDes}&from=2024-05-03&sortBy=publishedAt&apiKey=a91befe6f2c141b08f72e00d25a62951`;

inputBtn.addEventListener("click", () =>{
    hero.innerHTML = "";
    searchDes = inputBox.value;
    url = `https://newsapi.org/v2/everything?q=${searchDes}&from=2024-05-03&sortBy=publishedAt&apiKey=a91befe6f2c141b08f72e00d25a62951`;
    myNews();
})


async function myNews() {
    let response = await fetch(url);
    let news = await response.json();
    console.log(news);
    let m = Math.floor(Math.random() * 80) + 1;
    for (let i = m; i < m+8; i++) {
        
        let box = document.createElement('a');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let myHref = news.articles[i].url;
        box.classList.add('box');
        box.setAttribute('href', myHref);
        box.setAttribute('target', '_blank');

        img.src = news.articles[i].urlToImage;
        h3.innerHTML = news.articles[i].description;
        p.innerHTML = news.articles[i].content;
        box.appendChild(img);
        box.appendChild(h3);
        box.appendChild(p);

        hero.appendChild(box);
    }
}

myNews();