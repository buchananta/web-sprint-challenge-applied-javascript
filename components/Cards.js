// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


//keep in mind, the structure is {articles: {subjects: [actualArticlesArr]} }
//that is SUPER annoying.
function makeCard(article) {
  const element = document.createElement('div');
  element.className = 'card';
  element.innerHTML = `<div class="headline">${article.headline}</div>
   <div class="author">
     <div class="img-container">
       <img src=${article.authorPhoto} />
     </div>
     <span>By ${article.authorName}</span>
   </div>`;
   //now create a listener
   element.addEventListener('click', event => {
     console.log(element.querySelector('.headline').textContent);
   })
   //and finally return the whole thing!
   return document.querySelector('.cards-container').appendChild(element);
}

axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(result => {
    //this is going to be a mess
    for (topic in result.data.articles) {
      result.data.articles[topic].forEach(article => {
        makeCard(article);
      })
    }
  })
