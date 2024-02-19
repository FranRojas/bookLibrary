
const book1 = new Book('Roots',"rootsie", 450, 'yes');
const book2 = new Book('Pride and Prejudice',"don", 300, 'yes');
const book3 = new Book('How to think',"smartAI", 50, 'no');

const myLibrary = [book1, book2, book3];
const rootElemento=document.querySelector(".display");



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
    myLibrary.push(book344);
    myLibrary.push(book34);
    console.log("add ");
   5
}
const BtnAdd =  document.querySelector(".btn-add");
//BtnAdd.addEventListener("click", addBookToLibrary);




function displayBook (){
   rootElemento.innerHTML = `
   <div>
    ${myLibrary.map(function(book){
        return  `
        <div class= card>
        <p> ${book.title}  </p>
        <p> ${book.author }  </p>
        <p> ${book.pages}  </p>
        <p> ${book.isRead}  </p>
       
        </div>
        `
    }).join('')}
   
   </div> 

   <p> These ${myLibrary.length} books have been added recently </p>
   `

    
}
BtnAdd.addEventListener("click", displayBook);

