


let Newscards = document.getElementById('Newscards');

const xhrRequest = new XMLHttpRequest();

xhrRequest.open('GET',`https://saurav.tech/NewsAPI/everything/bbc-news.json`,true);

xhrRequest.send();

xhrRequest.onload = function (){
   if(this.status===200){
       let resJSON = JSON.parse(this.responseText);
       let articles = resJSON.articles;
       console.log(articles);
       let newsContent ="";
       articles.forEach(element => {
        var news = `<div class="card" style="width: 18rem;">
                        <img src=${element.urlToImage} class="card-img-top" alt="" id="set-img" >
                        <div class="card-body">
                            <p class="card-text">${element.description}</p>
                            <a href="${element.url}" class="btn btn-primary " target="_blank">Read Full Article</a>
                        </div>
                    </div > `
    newsContent+=news;
       });
       Newscards.innerHTML = newsContent;
   }
   else{
        alert('Some Error Occured');
    }
  
}




 



























