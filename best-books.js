const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dayEl = document.getElementById('date');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const day = dayEl.value;

  // Create a Date object using the extracted values
  const formattedDate = `${year}-${month}-${day}`;
  
  // Fetch bestselling books for date and add top 5 to page
  fetchData(formattedDate);
});

const booksContainer = document.getElementById('books-container');

// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
//const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const list = 'hardcover-fiction';
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists';

function fetchData(formattedDate) { 
  const url = `${BASE_URL}/${formattedDate}/${list}?q=tech&api-key=${API_KEY}`;
  
  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(function(responseJson) {    
    let books = responseJson.results.books;

    // Create a text container div
    const textContainer = document.createElement('div');
    textContainer.id = 'text-container'; // Assign an ID to the container\

    // Append the text container to the booksContainer
    booksContainer.appendChild(textContainer);
    
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
      booksContainer.appendChild(bookSpan);
      booksContainer.appendChild(document.createElement('br'));
      booksContainer.appendChild(titleSpan);
      booksContainer.appendChild(titleTextNode);
      booksContainer.appendChild(document.createElement('br'));
      
      booksContainer.appendChild(authorSpan);
      booksContainer.appendChild(authorTextNode);
      booksContainer.appendChild(document.createElement('br'));

      booksContainer.appendChild(descriptionSpan);  
      booksContainer.appendChild(descriptionTextNode);
      booksContainer.appendChild(document.createElement('br'));
      booksContainer.appendChild(document.createElement('br'));
    }    
  });
}