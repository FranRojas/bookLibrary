
const myLibrary = [];



function Book(title, author, pages, isRead ){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function (){
        return `The ${title} written by ${author} has ${pages} pages, ${isRead} `;
    }
}
const book1 = new Book('Roots',"rootsie", 450, 'yes');
const book2 = new Book('Roots',"rootsie", 300, 'yes');
const book3 = new Book('Roots',"rootsie", 50, 'no');
const book4 = new Book('Roots',"rootsie", 50, 'no');
const book34 = new Book('Roots',"rootsie", 50, 'no');
const book344 = new Book('Roots',"rootsie", 50, 'no');




function addBookToLibrary(){
    myLibrary.push(book1);
}
const BtnAdd =  document.querySelector(".btn-add");
BtnAdd.addEventListener("click", addCard);
function addCard(){
    const card = document.createElement('div');
    card.classList.toggle('card')
    console.log("add ");
    const rootElemento=document.querySelector(".container");
    rootElemento.appendChild(card);
    addBookToLibrary();
}




function displayBook (){

    myLibrary.forEach((element)=> addCard(element)
        
    );
    };
    displayBook();

