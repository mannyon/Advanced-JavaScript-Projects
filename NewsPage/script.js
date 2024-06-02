// api key = a91befe6f2c141b08f72e00d25a62951;
let searchDes = "bitcoin";
const url = `https://newsapi.org/v2/everything?q=${searchDes}&from=2024-05-02&sortBy=publishedAt&apiKey=a91befe6f2c141b08f72e00d25a62951`;
let hero = document.querySelector(".hero");

async function myNews() {
    let response = await fetch(url);
    let news = await response.json();
    console.log(news);
    console.log(news.articles[0].urlToImage);


    for (let i = 0; i < 8; i++) {
        let box = document.createElement('div');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        box.classList.add('box');

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