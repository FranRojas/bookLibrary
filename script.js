
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


function displayBook (){
    myLibrary.forEach((element) => console.log(element));
        
    };

