//API Variables
var source = "bbc-news";
let article_cards;
var category = "health";
var country = "in";
var api_url = "";
var cards = document.querySelector('#cards');

//Title Changes
var title = document.querySelector('#title');

//Change dropdown name
var drop = document.querySelector('#drop');

//Choosen Country
var India = document.querySelector('#India');
var usa = document.querySelector('#USA');
var uk = document.querySelector('#UK');
var france = document.querySelector('#France');
var australia = document.querySelector('#Australia');
var russia = document.querySelector('#russia');

//Choosen Category
var health = document.querySelector('#health');
var business = document.querySelector('#business');
var sports = document.querySelector('#sports');
var science = document.querySelector('#science');
var technology = document.querySelector('#technology');
var entertainment = document.querySelector('#entertainment');

//General source Selected
var bbc = document.querySelector('#bbc');
var cnn = document.querySelector('#CNN');
var fox = document.querySelector('#fox');


//On Opening Web Application
window.onload = ()=>{
  display_news();
}

//countries
India.addEventListener('click',()=>{
  country = "in";
  title.innerHTML = category.toUpperCase() + " " + country.toUpperCase();
  drop.innerHTML = "India";
  display_news();
});
uk.addEventListener('click',()=>{
  country = "gb";
  drop.innerHTML = "UK";
  title.innerHTML = category.toUpperCase() + " " + country.toUpperCase();
  display_news();
});
usa.addEventListener('click',()=>{
  country = "us";
  drop.innerHTML = "USA";
  title.innerHTML = category.toUpperCase() + " " + country.toUpperCase();
  display_news();
});
russia.addEventListener('click',()=>{
  country = "ru";
  drop.innerHTML = "Russia";
  title.innerHTML = category.toUpperCase() + " " + country.toUpperCase();
  display_news();
})
france.addEventListener('click',()=>{
  country = "fr";
  drop.innerHTML = "France";
  title.innerHTML = category.toUpperCase() + " " + country.toUpperCase();
  display_news();
});
australia.addEventListener('click',()=>{
  country = "au";
  drop.innerHTML = "Australia";
  title.innerHTML = category.toUpperCase() + " " + country.toUpperCase();
  display_news();
});

//categories for news_card
entertainment.addEventListener('click',()=>{
  category = "entertainment";
  title.innerHTML = category.toUpperCase() + " " + country.toUpperCase();
  display_news();
  document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/22/762/507/film-movie-filmmaker-movie-director-wallpaper-preview.jpg')";
 
})
health.addEventListener('click',()=>{
  category = "health";    
  title.innerHTML = category.toUpperCase() + " " + country.toUpperCase();
  display_news();
  document.body.style.backgroundImage = "url('https://www.hdwallpapersfreedownload.com/uploads/large/special-days/happy-world-health-day-earth-april-7-hd-wallpaper.jpg')";

})
business.addEventListener('click',()=>{
  category = "business";
  title.innerHTML = category.toUpperCase() + " " + country.toUpperCase();
  display_news();
  document.body.style.backgroundImage = "url('https://wallpaperbat.com/img/484175-business-office-desktop-wallpaper-top-free-business-office-desktop-background.jpg')";
 
})
technology.addEventListener('click',()=>{
  category = "technology";
  title.innerHTML = category.toUpperCase()  + " " + country.toUpperCase() ;
  display_news();
  document.body.style.backgroundImage = "url('https://cdn.hipwallpaper.com/i/77/22/7dHxjJ.jpg')";
})
science.addEventListener('click',()=>{
  category = "science";
  title.innerHTML = category.toUpperCase()  + " " + country.toUpperCase() ;
  display_news();
  document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp2780647.jpg')";
})
sports.addEventListener('click',()=>{
  category = "sports";
  title.innerHTML = category.toUpperCase() + " " + country.toUpperCase() ;
  display_news();
  document.body.style.backgroundImage = "url('https://www.desktopbackground.org/download/960x544/2014/12/01/864623_sports-themed-wallpaper-images-pictures-findpik_1024x768_h.jpg')";
})


//Change General Source
bbc.addEventListener('click',()=>{
  source = "bbc-news";
  title.innerHTML = "General News-BBC";
  display_news_source();
});
cnn.addEventListener('click',()=>{
  source = "cnn";
  title.innerHTML = "General News-CNN";
  display_news_source();
});
fox.addEventListener('click',()=>{
  source = "fox-news";
  title.innerHTML = "General News-FOX";
  display_news_source();
});

//Function to trim string
let trimString = function (string) {
  var length= 160;
  return string.length > length ? 
  string.substring(0, length) + '...' :
  string;
};


function display_news(){
  article_cards ="";
  cards.innerHTML = "";
  api_url= `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`
  fetch(api_url)
  .then(data=>data.json())
  .then(data=>{
      data.articles.map(article=>{
          if(article.description == null){
              article.description = article.content;
          }
          if(article.urlToImage == null){
              article.urlToImage = "https://static.vecteezy.com/system/resources/previews/001/826/248/non_2x/progress-loading-bar-buffering-download-upload-and-loading-icon-vector.jpg"
          }
          var a = trimString(article.description);
          let news_card =`
          <div class="card" style="width: 18rem;" id="news">
          <img id="card_image" src="${article.urlToImage}" class="card-img-top" alt="">
          <div class="card-body">
            <p class="card-text" id="desc">${a}</p>
            <a href="${article.url}" class="btn btn-primary" target="_blank">Full Article</a>
          </div>
        </div>
          ` ;
          article_cards += news_card;
      })
      cards.innerHTML= article_cards;
  })
}

function display_news_source() {
  article_cards= "";
  cards.innerHTML = "";
  api_url = `https://saurav.tech/NewsAPI/everything/${source}.json`;
  fetch(api_url)
  .then(response=>response.json())
  .then(data=>{
    data.articles.map(article=>{
      var a = trimString(article.description);
      let news_card = `<div class="card" style="width: 18rem;" id="news">
            <img id="card_image" src="${article.urlToImage}" class="card-img-top" alt="https://media.wired.com/photos/592722c1af95806129f51b71/master/pass/MIT-Web-Loading.jpg">
            <div class="card-body">
              <p class="card-text" id="desc">${a}</p>
              <a href="${article.url}" class="btn btn-primary" target="_blank">Full Article</a>
            </div>
          </div>`
          article_cards += news_card;
  })
  cards.innerHTML = article_cards;
  })
}

