import { Component } from 'react';
import './App.css';
import BookList from './components/BookList';
import Header from "./components/Header"
import Shelf from './components/Shelf';
import data from './data'

class App extends Component {
  constructor(){
    super()

    this.state = {
      books: data
    }

    this.books = this.books.bind(this)
    }
  

  books() {
    this.props.add(this.state.books);
  }
  render() {
    return (
      <div className="App">
      <Header />
      {/* <BookList add={this.state.books}/> */}
      <Shelf />
      </div>
    );
  }
}

export default App;
