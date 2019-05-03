import React from 'react';
import Book from './Book';

const BookList = ({books, onBookSelect}) => {
  //console.log(props.books);
  const book = books.map((book) =>{
    return (
          <Book 
            key={book.id} 
            onBookSelect={onBookSelect}
            book={book}
            />
    );
  });

  return(
  <div className="ui five stackable cards">{book}</div>
        );
}

export default BookList;