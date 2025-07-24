class Book { //public class Book
    constructor(public title: string, public author: string, public year: number){};

    describe(): void {
        console.log(`${this.title}, written by ${this.author} in ${this.year}`);
    }
}

const book1 = new Book("The Dreamy Boy", "Rafael", 2025);
book1.describe();