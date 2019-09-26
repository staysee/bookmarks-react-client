import React, { Component } from 'react';
import './App.css';

import AddBookmark from './addBookmark/addBookmark'
import BookmarkApp from './bookmarkApp/bookmarkApp'

// const bookmarks = [
//   {
//     title: "Google",
//     url: "http://www.google.com",
//     rating: "3",
//     description: "No evil"
//   },
//   {
//     title:"Google",
//     url:"http://www.google.com", 
//     rating:"3", 
//     description:"No evil"
//   }
// ];

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      bookmarks: [],
      showAddForm: false
    }
  }

  componentDidMount(){
    const url = "https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks";

    const options = {
      method: 'GET',
      headers: {
        //Add your key after Bearer
        "Authorization": "Bearer $2a$10$lQzNMiMpqlwsP3yvLr2Ed.UXxhKH9fni3gKuoj/gsZucPd83wJCzm",
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later!');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookmarks: data,
          error: null
        })
      })
      .catch(err => {
        this.setState ({
          error: err.messag
        })
      })

  }

  render() {
    const page = this.state.showAddForm
      ? <AddBookmark />
      : <BookmarkApp bookmarks = {this.state.bookmarks} />
    
    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
