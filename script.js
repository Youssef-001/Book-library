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

let form = document.querySelector("form");

let pageContent = document.querySelector(".page-content");


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
    form.classList.add('hidden');



    let card = document.createElement('div');
    card.classList.add('card')
    let card_img = document.createElement('img');
    card_img.src = `./images/${image}`
    card.appendChild(card_img);

    let cardContent = document.createElement('div');
    let cardTitle = document.createElement('div');
    cardTitle.textContent = title.value;
    cardContent.appendChild(cardTitle);

    let cardAuthor = document.createElement('div');
    cardContent.appendChild(cardAuthor);
    cardAuthor.textContent = `by ${author.value}`;

    let cardPages = document.createElement('div');
    cardContent.appendChild(cardPages);
    cardPages.textContent = `Pages: ${numberPages.value}`;

    let cardRead = document.createElement('div');
    cardContent.appendChild(cardRead);
    cardRead.textContent = `Read: ${read.checked? 'Yes' : 'No'}`;

    let changeStatus = document.createElement('button');
    changeStatus.textContent = 'Read? ';;
    cardContent.appendChild(changeStatus);

    card.appendChild(cardContent);
    pageContent.appendChild(card);

})



let addButton = document.querySelector(".btn");


addButton.addEventListener('click', function(e) {

   form.classList.remove('hidden'); 
} )