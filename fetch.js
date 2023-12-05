// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
//const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const list = 'hardcover-fiction';
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists';
const date = document.getElementById('date');
const form = document.getElementById('book-form')
//const url = `${BASE_URL}?q=tech&api-key=${API_KEY}`;

//const date = "2020-12-03";
//let url = `${BASE_URL}/${date}/${list}?q=tech&api-key=${API_KEY}`;
     
function fetchData() {  
  const url = `${BASE_URL}/${date.value}/${list}?q=tech&api-key=${API_KEY}`;

  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(function(responseJson) {    
    let books = responseJson.results.books;

    // Create a text container div
    const textContainer = document.createElement('div');
    textContainer.id = 'text-container'; // Assign an ID to the container\

    // Append the text container to the form
    form.appendChild(textContainer);
    
    for(let i=0;i<5;i++) {      
      const bookSpan = document.createElement('span');
      bookSpan.textContent = `Book ${i+1}`;
      bookSpan.style.fontWeight = 'bold';

      const titleSpan = document.createElement('span');
      titleSpan.textContent = `Title: `;
      titleSpan.style.fontWeight = 'bold';

      const authorSpan = document.createElement('span');
      authorSpan.textContent = `Author: `;
      authorSpan.style.fontWeight = 'bold';

      const descriptionSpan = document.createElement('span');
      descriptionSpan.textContent = `Description: `;
      descriptionSpan.style.fontWeight = 'bold';

      const titleTextNode = document.createTextNode(books[i].title)
      const authorTextNode = document.createTextNode(books[i].author);
      const descriptionTextNode = document.createTextNode(books[i].description);

      // Append each book
      form.appendChild(bookSpan);
      form.appendChild(document.createElement('br'));
      form.appendChild(titleSpan);
      form.appendChild(titleTextNode);
      form.appendChild(document.createElement('br'));
      
      form.appendChild(authorSpan);
      form.appendChild(authorTextNode);
      form.appendChild(document.createElement('br'));

      form.appendChild(descriptionSpan);  
      form.appendChild(descriptionTextNode);
      form.appendChild(document.createElement('br'));
      form.appendChild(document.createElement('br'));
    }    
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  fetchData();
})

/*
form.addEventListener("submit", function() {
//document.getElementById("submit-btn").addEventListener("click", function() {
  console.log("Submit Button Pressed");
  
//  const date1 = "2020-12-03";
//  const url = `${BASE_URL}/${date1}/${list}?q=tech&api-key=${API_KEY}`;
  console.log(`url: ${url}`);
  
  fetch(url)
  .then(response => {
    console.log("then");
    return response.json();
  })
  .then(function(responseJson) {
    console.log("TEST");
    console.log(responseJson);

    //const textNode = document.createTextNode(books);

    let books = responseJson.results.books;
    console.log(books);
    for(let i=0;i<5;i++) {
      console.log(books[i].title);
      console.log(books[i].author);
      console.log(books[i].description);

      //form.appendChild(document.createTextNode(book[i].title));
      //form.appendChild(document.createTextNode(book[i].author));
      //form.appendChild(document.createTextNode(book[i].description));
    }
  })
  .catch(error => {
    console.error('Error fetching data: ', error);
  });
});
*/

/*
form.addEventListener("submit", function(e) {
  console.log(date.value);
  const url = `${BASE_URL}/${date.value}/${list}?q=tech&api-key=${API_KEY}`;
  console.log(`url: ${url}`);

  fetch(url)
  .then(response => {
    console.log("then");
    return response.json();
  })
  .then(function(responseJson) {
    console.log("TEST");
    console.log(responseJson);

    const textNode = document.createTextNode(Books);

    let books = responseJson.results.books;
    console.log(books);
    for(let i=0;i<5;i++) {
      console.log(books[i].title);
      console.log(books[i].author);
      console.log(books[i].description);

      form.appendChild(document.createTextNode(book[i].title));
      form.appendChild(document.createTextNode(book[i].author));
      form.appendChild(document.createTextNode(book[i].description));
    }
  });
});
*/


/*
fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
  });
*/