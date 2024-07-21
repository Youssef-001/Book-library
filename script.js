const myLibrary = [];




class Book
{
    constructor(title, author, numberPages, read, description, cover)
    {
        this.title = title;
        this.author = author;
        this.numberPages = numberPages;
        this.read = read;
        this.description = description;
        this.cover = cover;
    }

}


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

let description = document.querySelector("#description");

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
    let newBook = new Book(title.value, author.value, numberPages.value, read.checked,description.value, image);
    addBookToLibrary(newBook);
    // console.log(myLibrary)
    form.classList.add('hidden');
    pageContent.style.opacity="1";



    let card = document.createElement('div');
    card.classList.add('card')
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    let card_img = document.createElement('img');
    card_img.src = `./images/${image}`
    imageContainer.appendChild(card_img);
    card.appendChild(imageContainer);

    let cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    let cardTitle = document.createElement('div');
    cardTitle.classList.add("book-title")
    cardTitle.textContent = title.value;
    cardContent.appendChild(cardTitle);

    let cardAuthor = document.createElement('div');
    cardContent.appendChild(cardAuthor);
    cardAuthor.classList.add("book-author")
    cardAuthor.textContent = `By `;
    let cardAuthorSpan = document.createElement('span');
    cardAuthorSpan.textContent = author.value;
    cardAuthor.appendChild(cardAuthorSpan);

    let cardDescription = document.createElement('div');
    cardDescription.classList.add('book-description');
    cardDescription.textContent = description.value;
    cardContent.appendChild(cardDescription);

    let cardPages = document.createElement('div');
    cardContent.appendChild(cardPages);
    cardPages.classList.add("book-pages")
    cardPages.textContent = `Pages: ${numberPages.value}`;

    let cardRead = document.createElement('div');
    cardContent.appendChild(cardRead);
    cardRead.classList.add("book-read")
    cardRead.textContent = `Read: ${read.checked? 'Yes' : 'No'}`;


    let buttonsDiv = document.createElement('div');



    let changeStatus = document.createElement('button');
    changeStatus.textContent = 'Read? ';;
    changeStatus.addEventListener('click', function(){
        newBook.read =!newBook.read;
        cardRead.textContent = `Read: ${newBook.read? 'Yes' : 'No'}`;
    })
    buttonsDiv.appendChild(changeStatus);


    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    
    buttonsDiv.appendChild(deleteButton);

    deleteButton.addEventListener('click', function(){
        myLibrary.splice(myLibrary.indexOf(newBook), 1);
        card.remove();
    })

    cardContent.appendChild(buttonsDiv);

    card.appendChild(cardContent);
    pageContent.appendChild(card);

})



let addButton = document.querySelector(".btn");


addButton.addEventListener('click', function(e) {

   form.classList.remove('hidden'); 
   pageContent.style.opacity="0.1"
} )


let xButton = document.querySelector(".x-button");

xButton.addEventListener('click', function(e) {
    form.classList.add('hidden');
    pageContent.style.opacity="1";
} )