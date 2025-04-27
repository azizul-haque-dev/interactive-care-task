/* Problem 7:
Suppose you are building a student database for your class that will track student’s names and their marks. Your class has 40 students but now you are seeing that there are 41 entries in your database so you decide to check the database. And you find out that you have mistakenly uploaded a student’s name twice.
Task
 Write a `removeDuplicates` function that takes in an array of names and returns a new array with any duplicates removed.
Sample Input:
Student_names = [‘Zara’, ‘Sadia’ , ‘Mahin’ , ‘Adnan’ , ‘Maisha’, ‘Adnan’, ‘Faiyaz’]
Sample Output :
Student_names = [‘Zara’, ‘Sadia’ , ‘Mahin’ , ‘Adnan’ , ‘Maisha’, ‘Faiyaz’]
 */

function removeDuplicates(array) {
  let unique = [];
  for (let arr of array) {
    if (!unique.includes(arr)) {
      unique.push(arr);
    }
  }
  console.log(unique);
  return unique;
}
removeDuplicates([
  "Zara",
  "Sadia",
  "Mahin",
  "Adnan",
  "Maisha",
  "Faiyaz",
  "Adnan"
]);

const books = [{ title: "Bohubrihi", writer: "Humayun Ahmed", copy: 10 }];
const bookObject = {
  addBook(title, copy) {
    for (let book of books) {
      if (book.title === title) {
        book.copy -= Number(copy);
      }
    }
  },
  sellBook(title, copy) {
    for (let book of books) {
      if (book.title === title) {
        book.copy -= Number(copy);
      }
    }
  },
  createBook(title, writer, copy) {
    books.push({ title, writer, copy });
  }
};
