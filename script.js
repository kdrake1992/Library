let myTable = "";
let myLibrary = [];

let library = document.getElementById("bookGrid");
let bookform = document.getElementById("bookForm");
let newBookButton = document.getElementById("newBook")


// Book constructor
class Book {

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    get info(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

// Adds book to library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

let a = new Book("Apple", "Adam", 15, "Finished");
let b = new Book("Ballon", "Bob", 105, "Unfinished");
let c = new Book("Cat", "Kate", 200, "Finished");

addBookToLibrary(a);
addBookToLibrary(b);
addBookToLibrary(c);

// Builds the library table
let buildGrid = function() {
    myLibrary.forEach(e => {
        let newCard = document.createElement("div");
        newCard.innerHTML =     `<div class=\"card\">
                                <p>Title: ${e.title} </p>
                                <p>Author: ${e.author}</p>
                                <p>Pages: ${e.pages}</p>
                                <p>Read: ${e.read}</p>
                                <div class="bottomCard">
                                    <button id="updateBook" value=${e.title}>Update</button>
                                    <button id="removeBook" value=${e.title}>Remove</button>
                                </div>`
        library.appendChild(newCard);
    })
}

// Build intial table
buildGrid();

// New Book button function
newBookButton.addEventListener('click', e => {

    if (library.style.display === "none") {
        library.style.display = "grid";
        bookForm.style.display = "none";
    }
    else {
        library.style.display = "none";
        bookForm.style.display = "flex";
    }
})

//Reads new book form
bookform.addEventListener('submit', e => {
    e.preventDefault();

    let titleInput = document.getElementById("booktitle");
    let authorInput = document.getElementById("bookauthor");
    let pagesInput = document.getElementById("bookpages");
    let readInput = document.getElementById("bookread");

    //Checked checkbox
    if(readInput.checked == true) {
        readInput.value = "Finished";
    }
    else {
        readInput.value = "Unfinished"
    }

    let addbook = new Book(titleInput.value, authorInput.value,
        pagesInput.value, readInput.value);

    addBookToLibrary(addbook);
    adjustGrid();
})


// Adds removebook function to remove button
let remove = function() {
    let removeBook = document.querySelectorAll("#removeBook")
    removeBook.forEach(e => {
        e.addEventListener("click", ee=> {
            let remove = ee.target.value;
            let newLibrary = myLibrary.filter(data => data.title != remove);
            myLibrary = newLibrary;
    
            adjustGrid();
        })
    })
}

// Adds update function to read button
let update = function() {
    let updateBook = document.querySelectorAll("#updateBook")
    updateBook.forEach(f => {
        f.addEventListener("click", ff => {
            let edit = ff.target.value;
            let currentBook = myLibrary.findIndex(data => data.title === edit);
            if(myLibrary[currentBook].read == "Unfinished") {
                myLibrary[currentBook].read = "Finished";
            }
            else {
                myLibrary[currentBook].read = "Unfinished"
            }
            
            adjustGrid();
        })
    })
}

remove();
update();

// Removes old table, replaces it with a new one
let adjustGrid = function() {
    library.innerHTML = ""
    bookForm.reset();


    buildGrid();
    remove();
    update();

    library.style.display = "grid";
    bookForm.style.display = "none";
}
