import React from 'react';
import BookList from './BookList'
import booksapi from '../api/books';
import BookDetails from './bookDetails';
class App extends React.Component{
  
  state = {
    books: [],
    selectedBook: null,
    isSignedIn: null
  }

  componentDidMount = async () => {
    
    const response = await booksapi.get('/books');
   // console.log(response.data);
    this.setState({books: response.data});
      
  }

  onBookSelect = (book) => { 
    this.setState({
      selectedBook: book
    });
  }



  render(){
    const {isSignedIn} = this.props;
    //console.log(isSignedIn);
    return(
      <div className="ui container" style={{marginTop:'20px'}}>
        <div>
            <BookList 
            onBookSelect = {this.onBookSelect}
            books = {this.state.books}
            />
          </div>
          <div className="ui section divider"></div>
          <div className="ui centered" style={{marginTop:'20px'}}>
            <div className="card">
              <BookDetails isSignedIn = {isSignedIn} selectedBook={this.state.selectedBook}/>
            </div>    
          </div>       
      </div>
    );
  }
}

export default App;