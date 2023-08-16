let newBookBtn = document.querySelector(".newBook");
let newBookForm = document.querySelector("#newBookForm")
let add = document.querySelector(".add");
let library = document.querySelector(".library");

const books = [];

newBookBtn.addEventListener("click", () => newBookForm.classList.remove("hidden"));

add.addEventListener("click", (event)=> {
  event.preventDefault();
  addBook();
  newBookForm.classList.add("hidden");
})

function render() {
  library.innerHTML = "";
  for (let i = 0; i < books.length; i++){
    let book = books[i];
    let bookEl = document.createElement("div");
    bookEl.classList.add("book");
    bookEl.innerHTML = 
    `
      <div class="book-image">
        <img src=${book.image} />      
      </div>
      <div class="book-header">
        <h2>${book.title}</h2>
        <h3>${book.author}</h3>
      </div>
      <div class="book-content">
        <p>
          ${book.description}
        </p>
        <p>
          Number of pages  ${book.pages}
        </p>

        
      </div>
      <div class="book-footer">
        <p class="read-status">${book.read ? "Read" : "Not read Yet"}</p>
        <button class="remove" onClick = "remove(${i})">Remove</button>
      </div>
    `
    library.appendChild(bookEl);
  }
}

function Book(image, title, author, description, pages, read ) {
  this.image = image;
  this.title = title;
  this.author = author;
  this.description = description;
  this.pages = pages;
  this.read = read;
}

function addBook(){
  let imgLink = document.querySelector("#image-link").value;
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let description = document.querySelector("#description").value;
  let read = document.querySelector("#read").checked;

  let newBook = new Book(imgLink, title, author, description, pages, read);
  books.push(newBook);
  render();
}

function remove(index){
  books.splice(index, 1);
  render();
}