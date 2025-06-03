const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let loading = document.querySelector("#loading");
      loading.style.display = "none";

      data.forEach((item) => {
        let book = document.createElement("section");

        let title = document.createElement("h2");
        title.textContent = item.name;
        book.append(title);

        let author = document.createElement("p");
        author.textContent = "by " + item.authors.join(", ");
        book.append(author);

        let date = document.createElement("p");
        date.textContent = item.released.substring(0, 4);
        book.append(date);

        let length = document.createElement("p");
        length.textContent = item.numberOfPages + " pages";
        book.append(length);

        app.append(book);
      });
    })
    .catch((error) => console.error(error));
};

fetchData(url);
