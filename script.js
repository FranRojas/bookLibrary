
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


function addBookToLibrary(){
    
}