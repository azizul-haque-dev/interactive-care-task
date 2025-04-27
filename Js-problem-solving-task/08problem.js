/* Problem 8:
You are giving a book stall at Dhaka International book fair and need to create a list of books to be featured at the event.
Task:
Write a function `createBookList` that takes in three parameters: `bookTitles`, an array of book titles, `authorNames`, an array of corresponding author names and ‘number of copies available’ , an array of corresponding copies available for the book.
Write a function ‘Add Copies’ that takes two parameters : `bookTitle` and the number of copies you are adding to that book. The function should add copies to that particular book.
Write a function ‘Sell Book’ that takes two parameters : `bookTitle` and the number of copies you are selling of that book. The function should deduct copies of that particular book.
Write a function ‘GetDetails’ that takes no parameters and returns all the titles of the book in the bookTitles array ,the author names of the book in the `authorNames’ array and the number of copies available of the corresponding books, which should be updated after adding or selling a book.
.
Sample Input:
createBookList(‘Bohubrihi’ , ‘Humayun Ahmed’ , 10)
Add Copies(‘Bohubrihi’ , 5)
Updates number of copies available of Bohubrihi to 15)
‘Sell Book’(‘Bohubrihi’ , 3)
 Updates number of copies available of Bohubrihi to 12)
‘GetDetails’()
  Returns (“Bohubrihi” by “Humayun Ahmed” number of copies available 12)
 */
const books = [{ title: "Bohubrihi", writer: "Humayun Ahmed", copy: 10 }];

const bookObject = {
  addBook(title, copy) {
    for (let book of books) {
      if (book.title === title) {
        book.copy += Number(copy); // Add copies
      }
    }
  },
  sellBook(title, copy) {
    for (let book of books) {
      if (book.title === title) {
        book.copy -= Number(copy); // Subtract copies
      }
    }
  },
  createBook(title, writer, copy) {
    books.push({ title, writer, copy });
  },
  getDetails() {
    for (let book of books) {
      return `${book.title} by ${book.writer} number of copies available ${book.copy} `;
    }
  }
};

// ---- Now adding some books ----

// Add new Bengali books
bookObject.createBook("Devdas", "Sharatchandra Chattopadhyay", 5);
bookObject.createBook("Pather Panchali", "Bibhutibhushan Bandyopadhyay", 8);
bookObject.createBook("Chokher Bali", "Rabindranath Tagore", 4);

console.log("Books after adding new books:");
console.log(books);

// Add more copies to "Devdas"
bookObject.addBook("Devdas", 3);

console.log("After adding more copies to 'Devdas':");
console.log(books);

// Sell some copies of "Pather Panchali"
bookObject.sellBook("Pather Panchali", 2);

console.log("After selling copies of 'Pather Panchali':");
console.log(books);
