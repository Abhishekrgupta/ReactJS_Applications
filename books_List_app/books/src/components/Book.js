import React from 'react';
class Book extends React.Component{

  render(){
  const {book, onBookSelect} = this.props;
    return(
 
      <div onClick={() => onBookSelect(book)} className="card">
        <div className="image">
          <img alt={book.title} src={book.image}/>
        </div>
        <div className="content">
          <div className="header center">{book.title}</div>
        </div>
        
      </div>
    );
  }
}

export default Book;
