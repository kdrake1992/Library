let myTable = "";
let myLibrary = [];

let library = document.getElementById("library");


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

let newBook =function() {
    let tableLibrary = document.getElementById("library");
    let bookForm = document.getElementById("bookForm")
    if (tableLibrary.style.display === "none") {
        tableLibrary.style.display = "table";
        bookForm.style.display = "none";
    }
    else {
        tableLibrary.style.display = "none";
        bookForm.style.display = "flex";
    }

}


let buildTable = function() {
    myLibrary.forEach(e => {
        let row = library.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();
        let cell5 = row.insertCell();
        let cell6 = row.insertCell();

        cell1.innerHTML = e.title;
        cell2.innerHTML = e.author;
        cell3.innerHTML = e.pages;
        cell4.innerHTML = e.read;
        cell5.innerHTML = "<button id=\"haveRead\">Read</button>"
        cell6.innerHTML = "<button id=\"remove\">Remove</button>"

    });
}

buildTable();