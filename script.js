let books = [];

function addBook() {
    let bookName = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let isbn = document.getElementById("isbn").value;
    let quantity = document.getElementById("quantity").value;

    if (bookName === "" || author === "" || category === "" ||
        isbn === "" || quantity === "") {
        alert("Please fill all fields");
        return;
    }

    let book = {
        name: bookName,
        author: author,
        category: category,
        isbn: isbn,
        quantity: quantity
    };

    books.push(book);

    displayBooks();
    clearForm();

    alert("Book added successfully!");
}

function displayBooks() {
    let table = document.getElementById("bookTable");

    table.innerHTML = "";

    for (let i = 0; i < books.length; i++) {

        table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${books[i].name}</td>
                <td>${books[i].author}</td>
                <td>${books[i].category}</td>
                <td>${books[i].isbn}</td>
                <td>${books[i].quantity}</td>
                <td>
                    <button onclick="editBook(${i})">Edit</button>
                    <button onclick="deleteBook(${i})">Delete</button>
                </td>
            </tr>
        `;
    }
}

function editBook(index) {

    document.getElementById("bookName").value = books[index].name;
    document.getElementById("author").value = books[index].author;
    document.getElementById("category").value = books[index].category;
    document.getElementById("isbn").value = books[index].isbn;
    document.getElementById("quantity").value = books[index].quantity;

    books.splice(index, 1);

    displayBooks();
}

function deleteBook(index) {

    if (confirm("Are you sure you want to delete this book?")) {
        books.splice(index, 1);
        displayBooks();
    }
}

function clearForm() {

    document.getElementById("bookName").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value = "";
    document.getElementById("isbn").value = "";
    document.getElementById("quantity").value = "";
}