function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books') // sends request for data
    .then(resp => resp.json()) // sets variable name to resp and turns into json object
    .then(json => renderBooks(json)); // sets var. name to json and passes to function 
    
  }
  
  function renderBooks(books) {
  debugger;
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
