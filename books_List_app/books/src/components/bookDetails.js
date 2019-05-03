import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

import booksapi from '../api/books';

class BookDetails extends React.Component{
  
  onRatingChange = async (updatedRating, toupdatebook) => {
    // console.log(updatedRating);
    // console.log(toupdatebook.id);
    const response = await booksapi.get('/books');
    response.data.map((book) =>{
      if (book.id === toupdatebook.id) {
        //console.log(`${book.id} matched ${bookid}`); 
        toupdatebook.rating = updatedRating;
        // console.log(toupdatebook);
        return booksapi.put(`/books/${book.id}`, toupdatebook);
      }
    });
  } 


  render(){
  const {selectedBook, isSignedIn} = this.props;
  //console.log(isSignedIn);
    if (selectedBook === null ) {

      return (
        <h3>
          Please select the item to view
        </h3>
      )
      
    } else if(!isSignedIn){
      return (
        <h3>
          Please Login to View Book Details
        </h3>
      )
    } else {
    return( 
      <div className="ui unstackable items">
        <div className="item">
          <div className="image">
            <img src={selectedBook.image} alt={selectedBook.title} />
            <div style={{textAlign:'center'}}>
            <div className="meta">
              <span>Rate this Book</span>
            </div>
              <Rater 
              total={5} 
              rating={0} 
              onRate={(rating) => this.onRatingChange(rating.rating,selectedBook)}/>
            </div>
          </div>
          <div className="content">
            {/* <h1>{selectedBook.id}</h1> */}
            <h2>{selectedBook.title}</h2>
            <div> by <strong>{selectedBook.author}</strong></div>
            <div className="extra">
              Rating: 
              <Rater 
              total={5} 
              rating={selectedBook.rating}  
              interactive={false} />          
              </div>
            <div className="meta">
              <span>Description</span>
            </div>
            <div className="description">
              <p>{selectedBook.description}</p>
            </div>
           
          </div>
        </div>
      </div>
    );
    }
  }
}

export default BookDetails;
