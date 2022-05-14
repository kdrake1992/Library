let myTable = "";
let myLibrary = [];

let library = document.getElementById("library");
let bookform = document.getElementById("bookForm");

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

var a = new Book("Apple", "Adam", 15, "Finished");
var b = new Book("Ballon", "Bob", 105, "Unfinished");
var c = new Book("Cat", "Cate", 200, "Finished");

addBookToLibrary(a);
addBookToLibrary(b);
addBookToLibrary(c);

// Builds the library table
let buildTable = function() {
    myLibrary.forEach(e => {

        if(library.rows.length == 0 ) {
            let row = library.insertRow();
            let cell1 = row.insertCell();
            let cell2 = row.insertCell();
            let cell3 = row.insertCell();
            let cell4 = row.insertCell();
            let cell5 = row.insertCell();
            let cell6 = row.insertCell();

            cell1.innerHTML = "Title";
            cell2.innerHTML = "Author";
            cell3.innerHTML = "Pages";
            cell4.innerHTML = "Read";
            cell5.innerHTML = "Update";
            cell6.innerHTML = "Remove";
        }

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

// New Book button function
let newBook =function() {

    if (library.style.display === "none") {
        library.style.display = "table";
        bookForm.style.display = "none";
    }
    else {
        library.style.display = "none";
        bookForm.style.display = "flex";
    }

}

// Build intial table
buildTable();

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
    adjustTable();
})


// Removes old table, replaces it with a new one
let adjustTable = function() {
    library.innerHTML = ""
    bookForm.reset();


    buildTable();

    library.style.display = "table";
    bookForm.style.display = "none";
}


// Adds removebook and update listener events from library
for (var r = 1, n = library.rows.length; r < n; r++) {

    let currenttitle = library.rows[r].cells[0].innerHTML;
    let readstat = library.rows[r].cells[3].innerHTML;

    // Update listener
    library.rows[r].cells[4].addEventListener("click", e=> {
        if(readstat == "Finished") {
            readstat =  "Unfinished"
        }
        else {
            readstat = "Finished"
        }
    })
    // Removebook listener
    library.rows[r].cells[5].addEventListener("click", e=> {
        let newLibrary = myLibrary.filter(e => e.title != currenttitle)
        console.log("test");
        myLibrary = newLibrary;
        library.innerHTML = "";
        buildTable();
    })
}