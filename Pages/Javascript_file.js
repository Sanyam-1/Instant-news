


let Newscards = document.getElementById('Newscards');

let news_category ="";
let news_country = "in";
let background_url = "";


if(document.title.includes("Business")){
   news_category = "business";
   background_url = "https://wallpaperbat.com/img/484175-business-office-desktop-wallpaper-top-free-business-office-desktop-background.jpg";


}
else if(document.title.includes("Entertainment")){
    news_category = "entertainment";
    background_url = "https://c4.wallpaperflare.com/wallpaper/22/762/507/film-movie-filmmaker-movie-director-wallpaper-preview.jpg";
    
}
else if(document.title.includes("Sports")){
    news_category = "sports";
    background_url = "https://www.desktopbackground.org/download/960x544/2014/12/01/864623_sports-themed-wallpaper-images-pictures-findpik_1024x768_h.jpg";

}
else if(document.title.includes("Health")){
    news_category = "health";
    background_url = "https://www.hdwallpapersfreedownload.com/uploads/large/special-days/happy-world-health-day-earth-april-7-hd-wallpaper.jpg";
    

}
else if(document.title.includes("Science")){
    news_category = "science";
    background_url = "https://wallpapercave.com/wp/wp2780647.jpg";
}
else if(document.title.includes("Technology")){
    news_category = "technology";
    background_url = "https://cdn.hipwallpaper.com/i/77/22/7dHxjJ.jpg";
}

document.getElementById("back").style.background = `url(${background_url}) no-repeat center fixed`;
document.getElementById("back").style.backgroundSize = 'cover';


const xhrRequest = new XMLHttpRequest();

xhrRequest.open('GET',`https://saurav.tech/NewsAPI/top-headlines/category/${news_category}/${news_country}.json`,true);

xhrRequest.send();

xhrRequest.onload = function (){
   if(this.status===200){
       let resJSON = JSON.parse(this.responseText);
       let articles = resJSON.articles;
       console.log(articles);
       let newsContent ="";
       let imgurl ="https://media.istockphoto.com/videos/black-and-white-loading-indicator-on-dark-background-screen-animation-video-id1129874433?s=640x640";
       articles.forEach(element => {
           if( element.description == null && element.urlToImage == null ) {
            var news = `<div class="card" style="width: 18rem;">
                            <img src= "https://media.istockphoto.com/videos/black-and-white-loading-indicator-on-dark-background-screen-animation-video-id1129874433?s=640x640" class="card-img-top" alt="LOADING.." id="set-img" >
                            <div class="card-body">
                                <p class="card-text">No description Available. <br> Read Full Article <br> here  👇</p>
                                <a href="${element.url}" class="btn btn-primary " target="_blank">Read Full Article</a>
                            </div>
                        </div > `
           }

           else if(element.description == null){
               var news = `<div class="card" style="width: 18rem;">
               <img src=${element.urlToImage} class="card-img-top" alt="LOADING.." id="set-img" >
               <div class="card-body">
                   <p class="card-text">No description Available. <br> Read Full Article <br> here  👇</p>
                   <a href="${element.url}" class="btn btn-primary " target="_blank">Read Full Article</a>
               </div>
           </div > `

           }
           else if(element.urlToImage == null){
            var news = `<div class="card" style="width: 18rem;">
            <img src = "https://media.istockphoto.com/videos/black-and-white-loading-indicator-on-dark-background-screen-animation-video-id1129874433?s=640x640" class="card-img-top" alt="LOADING.." id="set-img" >
            <div class="card-body">
                <p class="card-text"> ${element.description}</p>
                <a href="${element.url}" class="btn btn-primary " target="_blank">Read Full Article</a>
            </div>
        </div > `
           }
           else{
            var news = `<div class="card" style="width: 18rem;">
                            <img src=${element.urlToImage} class="card-img-top" alt="LOADING.." id="set-img" >
                            <div class="card-body">
                                <p class="card-text">${element.description}</p>
                                <a href="${element.url}" class="btn btn-primary " target="_blank">Read Full Article</a>
                            </div>
                        </div > `
           }
    newsContent+=news;
       });
       Newscards.innerHTML = newsContent;
   }
   else{
        alert('Some Error Occured');
    }
  
}








// $('#sports-usa').click( () => {
//         $('#title-sports').html('Instant News : Sports USA');
//     });


// ${news_country
// if(document.title.includes("USA")){
//     news_country = "usa";
// }
 



























