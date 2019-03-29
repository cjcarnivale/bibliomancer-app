import React, { Component } from 'react'
import Config from './config'

const Context = React.createContext({
  allBooks: [],
  selectGenre: () => {},
  genres: {},
  genre: "Fiction",
  next: () => {},
  readIt: () => {},
  current: []
});

export class BooksProvider extends Component {
  state = {
    allBooks: [],
    genres: {},
    genre: "Fiction",
    error: false,
    current: [],
    read: []
  };

  componentWillMount () {
    fetch(`${Config.API_ENDPOINT}/allbooks`)
      .then(res => {
        if (!res.ok){
          throw new Error(); 
        }else{
        return res.json()
        }
      })
      .then(resJson => {
        this.setState(
          {
            allBooks: resJson
          },
          () => {
            this.setGenres();
          }
        );
      })
      .catch( () => {
        this.setState(
          {
            error: true
          }
        );
      });
    }

  selectGenre = gnr => {
    //sets genre based on drop down menu
    this.setState(
      {
        genre: gnr
      },
      //callback to assign currently selected genre array to current
      () => {
        this.setSelectedGenre();
      },
    );
  };

  setSelectedGenre () {
    this.setState({
      current: this.state.genres[this.state.genre]
      });
  };

  //adds to the read array when user clicks Read It and changes the array stored in genres to not include that book
  readIt = id => {
    const update = this.state.genres;
    const read = this.state.genres[this.state.genre].find(val => val.id === id);
    const remain = this.state.genres[this.state.genre].filter(val => val.id !== id);

    update[this.state.genre] = remain; 
    this.setState(
      {
        genres: update,
        read: [...this.state.read, read]
      },
      () => {
        this.setSelectedGenre(); 
      }
    );
  }; 

  //sets up the data structures
  setGenres() {
    const types = [];
    //identifies unique genres and stores them in types array
    for (let i = 0; i < this.state.allBooks.length; i++) {
      if(!types.includes(this.state.allBooks[i].genre)){
        types.push(this.state.allBooks[i].genre);
      }
    }
    //creates genre object with each genre as a property and empty arrays as the values
    const genres = {};
    for (let i = 0; i < types.length; i++){
      genres[types[i]] = [];
    }
    //puts each individual book in its respective genre array
    for(let i = 0; i < this.state.allBooks.length; i++){
      for (let typ of types){
        if (typ === this.state.allBooks[i].genre){
          genres[typ].push(this.state.allBooks[i]);
        }
      }
    }
    this.setState(
      {
        genres: genres
      },
      () => {
        this.setSelectedGenre();
      }
    );
  }

  //creates carouself effect for displayed recommendations
  next = () => {
    const swap = [...this.state.current];
    if(this.state.current.length > 0) {
      swap.push(swap.shift());
    }
    this.setState({
      current: swap
    });
  }

  render() {
    const pipe = {
      allBooks: this.state.allBooks,
      genres: this.state.genres,
      genre: this.state.genre,
      current: this.state.current,
      selectGenre: this.selectGenre,
      readIt: this.readIt,
      next: this.next,
      read: this.state.read,
      error: this.state.error
    };
    return(
      <Context.Provider value={pipe}>{this.props.children}</Context.Provider>
    )
  }
}

export default Context; 