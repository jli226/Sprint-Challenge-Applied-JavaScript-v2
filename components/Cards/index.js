// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")

  .then(data => {
    const arrayOfAllArticleObjects = [];
    articlesByTopicObject = data.data.articles;
    const arrayOfObjectsValues = Object.values(articlesByTopicObject);

    arrayOfObjectsValues.forEach(data => {
      data.forEach(array => {
        arrayOfAllArticleObjects.push(array);
      });
    });

    arrayOfAllArticleObjects.forEach(object => {
      let newArticle = Article(object);
      const cardsContainer = document.querySelector(".cards-container");
      cardsContainer.appendChild(newArticle);
    });
  })
  .catch(data => {
    console.log("Error message for 'Cards/Articles' API call");
  });

function Article(object) {
  const articleCard = document.createElement("div");
  const articleHeadline = document.createElement("div");
  const articleAuthor = document.createElement("div");
  const articleImageContainer = document.createElement("div");
  const articleImage = document.createElement("img");
  const articleByAuthor = document.createElement("span");

  articleCard.classList.add("card");
  articleHeadline.classList.add("headline");
  articleAuthor.classList.add("author");
  articleImageContainer.classList.add("img-container");

  articleHeadline.textContent = object.headline;
  articleImage.src = object.authorPhoto;
  articleByAuthor.textContent = `By ${object.authorName}`;

  articleCard.appendChild(articleHeadline);
  articleCard.appendChild(articleAuthor);
  articleAuthor.appendChild(articleImageContainer);
  articleImageContainer.appendChild(articleImage);
  articleAuthor.appendChild(articleByAuthor);

  return articleCard;
}
