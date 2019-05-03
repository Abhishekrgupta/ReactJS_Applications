import React from "react";
import unsplash from '../api/unsplash'
import SearchBar from "./SearchBar";
import ImageList from './ImageList'

 class App extends React.Component {
   state ={
     images: []
   }

  onSearchSubmit =  async (term) => {
    //console.log(term);

    // USING THE PROMISES TO HANDLE RESPONSE

    // axios.get('https://api.unsplash.com/search/photos', {
    //   params: {
    //     query: term
    //   },
    //   headers: {
    //     Authorization: 'Client-ID 9ebd2a51fc7424e9ace30da07d74da6f60503fb7f35c5659faaf1aa6980e6ade'
    //   }
    // }).then((response) => {
    //   console.log(response);
    // });

    // USING THE ASYN/AWAIT METHOD TO HANDLE THE RESPONSE
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });
    
    // console.log(response.data.results);
    this.setState({ images : response.data.results })
  } 

   render(){
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <h3>Search Image</h3>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <div>Found: {this.state.images.length} images.</div>
        <ImageList images = {this.state.images} />

      </div>
    );
   }
  
}

export default App;