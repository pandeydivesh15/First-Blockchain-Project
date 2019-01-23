import React, { Component } from 'react';
import './showMovies.css'

export class ShowMovies extends Component{
	handleChange = (movie) => {
		let _movie = movie;
		this.props.vote(_movie)
	}

	render(){
		let movieList = this.props.movies.map((movie, i)=>
		<tr key={i}>
			<td onClick={this.handleChange.bind(this, movie.name)}>{movie.name}</td>
			<td>{movie.rating}</td>
		</tr>)

		return(
			<div>
			<hr/>
			<table>
				<tbody>
					<tr>
						<th>Movie</th>
						<th>Vote</th>
					</tr>
					{movieList}
				</tbody>
			</table>
			</div>
		)
	}

}

export default ShowMovies;