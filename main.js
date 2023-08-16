let newBookBtn = document.querySelector(".newBook");
let newBookForm = document.querySelector("#newBookForm")
let add = document.querySelector(".add");
let library = document.querySelector(".books");

const books = [];

newBookBtn.addEventListener("click", () => newBookForm.classList.remove("hidden"));

add.addEventListener("click", (event)=> {
  event.preventDefault();
  addBook();
  newBookForm.classList.add("hidden");
})

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