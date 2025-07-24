"use strict";
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    ;
    describe() {
        console.log(`${this.title}, written by ${this.author} in ${this.year}`);
    }
}
const book1 = new Book("The Dreamy Boy", "Rafael", 2025);
book1.describe();
