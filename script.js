
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

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

function addBookToLibrary(){
    
}
const card = document.createElement('div');
card.textContent = "test";
const rootElemento=document.querySelector(".container");
rootElemento.append(card);




function displayBook (){
    for (let x = 0; x < myLibrary.length(); x++){
        for (const element in book1) {
            
        };
        console.log(element);
    }
   
        
    };

