import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ratingContract } from "./setup";
import { ShowMovies } from "./showMovies";

class App extends Component {
  constructor(props){
    super(props)

    var moviesList = [
      'The Avengers (2012)',
      'Avengers: Age of Ultron (2015)',
      'Avengers: Infinity War (2018)',
      'Avengers: Endgame (2019)']

    var movieDict = [];

    for (var i = 0; i < moviesList.length; i++) {
      var _dict = {
        name: moviesList[i], 
        rating: ratingContract.total_votes_for(moviesList[i]).toNumber()}

        movieDict.push(_dict)
    }

    this.state = {
      movies : movieDict
    }

    this.handleVoting = this.handleVoting.bind(this)
  }

  handleVoting(movie){
    ratingContract.vote_for(movie)
    let votes = ratingContract.total_votes_for(movie).toNumber()
    this.setState({movies:this.state.movies.map(
      (el) => el.name===movie ? Object.assign({}, el, {rating:votes}): el
    )});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-intro">Welcome to Ethereum and React based Application</h1>
        
        <p className="App-intro">
            Choose your favourite Avengers movie
        </p>
        <div>
          <ShowMovies movies = { this.state.movies } vote={this.handleVoting} />
        </div>
        </header>
      </div>
    );
  }
}

export default App;
