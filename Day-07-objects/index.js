// Task-1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    title: "History",
    author: "Jayen Hasan",
    year: 2003
}
console.log(book);

// Task-2: Task 2: Access and log the title and author properties of the book object.
console.log(book["title"], book["author"]);

// Task-3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book["tellAboutBook"] = function () {
    return `My book name is ${this.title} and author is ${this.author}`;
}
console.log(book.tellAboutBook());

// Task-4:  Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book["updatedYear"] = function (year) {
    this.year = year
}
console.log(book.updatedYear(2013));
console.log(book);

// Task-5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "Science",
    books: [
        {
            title: "Biology",
            author: "Jayen"
        },
        {
            title: "Physics",
            author: "Hasan"
        }
    ]
}
console.log(library);

// Task-6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);

for (let i = 0; i < library.books.length; i++) {
    console.log(library.books[i].title);
}

library.books.map((item) => (
    console.log(item.title)
))


// Task-7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book["info"] = function () {
    return `Book Title is ${this.title} and publish year is ${this.year}`
}
console.log(book.info());

// Task-8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (let property in book) {
    console.log(`${property} : ${book[property]}`);
}
// Task-9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
const keys = Object.keys(book)
const values = Object.values(book)
console.log(keys, values);

