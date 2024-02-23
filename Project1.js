
let library = [
    {
        title: 'The Digital Fortress',
        author: 'Dan Brown',
        availability: true,
        holder: ''
    },
    {
        title: 'The Davinci Code',
        author: 'Dan Brown',
        availability: false,
        holder: 'John Smith'
    },
    {
        title: 'Long Eagle',
        author: 'Anonymous',
        availability: true,
        holder: ''
    },
    {
        title: 'Atomic Habits',
        author: 'James Clair',
        availability: false,
        holder: 'Aline'
    },
    {
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        availability: true,
        holder: ''
    },
];
console.log(library);
//add a book
 const addBook =(book) =>{
   console.log(library.length);
   library.push(book);
   console.log(library.length);
 }
 // check if book is available
 
 const availableBook = ()=>{
   let available = library.filter(book => book.availability === true);
   console.log(available);
 }
//Borrow book
const borrow = (bookName, holder) => {
    var theAvailableBook = library.find(book => book.title === bookName && book.availability === true);
    if (theAvailableBook) {
        theAvailableBook.availability = false;
        theAvailableBook.holder = holder;
        console.log("The   borrowing book is :");
        console.log(theAvailableBook);
    } else {
        console.log('That book is not available');
    }
}

borrow('Think and Grow Rich', 'John Smith');

//return book 
const returned =(bookName,holder) =>{
  let returnedBook = library.find(book => book.title === bookName && book.holder === holder);
  if(returnedBook){
    returnedBook.availability = true;
    returnedBook.holder = '';
    console.log('The  returnedb book is:');
    console.log(returnedBook);
  }
  else{
    console.log('not returned');
  }
}
returned('Think and Grow Rich', 'John Smith');