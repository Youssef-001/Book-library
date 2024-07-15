const myLibrary = [];


function Book(title, author, numberPages,read, cover)
{
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.read = read;
    this.cover = cover;

}


// let mockin  = new Book("to kill a mockinbird", "lee", "294", "image");

function addBookToLibrary(book)
{
    myLibrary.push(book);
}

let button = document.querySelector(".btn");

button.addEventListener('click', function() {
    
});


let submit = document.querySelector(".submit");

let title = document.querySelector("#title");
let author = document.querySelector("#author");
let numberPages = document.querySelector("#pages");
let read = document.querySelector("#read");
let cover = document.querySelector("#cover");



submit.addEventListener('click', function(e){
    e.preventDefault();
    console.log(title.value);
    console.log(author.value);
    console.log(numberPages.value);
    console.log(read.checked)
    let val = cover.value.split('\\');
    let image = val[2];
    console.log(val[2]);
    // let newBook = new Book(title.value, author.value, numberPages.value, read.checked, "image");
    let newBook = new Book(title.value, author.value, numberPages.value, read.checked, image);
    addBookToLibrary(newBook);
    // console.log(myLibrary)
})