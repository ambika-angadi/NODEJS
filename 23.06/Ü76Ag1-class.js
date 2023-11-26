class Book {
    constructor(title, author, isbn, price) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.price = price;
    }
  
    // Getters
    get bookInfo() {
      return `${this.title} (${this.author}): ${this.price}`;
    }
  
    // Setters
    set bookPrice(price) {
      this.price = price;
    }
  }
  
  // Create book objects
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 9.99);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084", 12.50);
  const book3 = new Book("abc", "def", "9780451524935", 8.75);
  
  // Store books in an array
  const books = [book1, book2, book3];
  
  // Output book information using forEach
  books.forEach((book) => {
    console.log(book.bookInfo);
  });
  