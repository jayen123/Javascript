// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "Hasan"
let age = 19
console.log(`my name is ${name} and my age is ${age}`);

// Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`my name is ${name}\n my age is ${age}`);

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers[0]);
console.log(numbers.length - 1);

const alphabet = ['a', 'b', 'c', 'b', 'e'];
const [a, b] = alphabet;
console.log(a, b);

// Task 4: use object destructuring to extract the title and author from a book object ang log them to the console
const book = {
    title: "History",
    author: "Jayen Hasan",
    year: 2003
}
const { title, author } = book;
console.log(title, author);

// Task 5: use the spread operator to create a new array that includes all elements of an existing array plus additional elements and log the new array to the console
const existingElements = [1, 2, 3, 4]
const additionalElements = [5, 6, 7, 8]
const newArray = [...existingElements, ...additionalElements]
console.log(newArray);

// Task 6: use the rest operator in a function to accept an arbitrary number of arguments, sum them,and return the result

const sum = (...num) => {
    let addition = 0;
    for (i of num) {
        addition += i
    }
    return addition
}
console.log(sum(2, 4));


// Task 7: Write a function that takes two parameters and return their product , with the second parameter having a default value of 1 log the result of calling this function with and without the second parameter
const myFunc = function (name, value = 1) {
    let product = name * value
    return product
}
console.log(myFunc(4, 5));

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    getAge() {
        return this.age;
    }
};

console.log(person);
// Task 9: Create an object with computed property names based on variables and log the object to the console
const prefix = "user";
const id = 123;

const userObject = {
    [`${prefix}_id`]: id,
    [`is_${prefix}_active`]: true
};

console.log(userObject);