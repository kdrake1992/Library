let myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

// Adds book to library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

var a = new Book("a", "a", 2, "yes");
var b = new Book("b", "b", 3, "no");
var c = new Book("c", "c", 4, "yes");

addBookToLibrary(a);
addBookToLibrary(b);
addBookToLibrary(c);