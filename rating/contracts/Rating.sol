pragma solidity ^0.5.0;
// Version of compiler for this code

// Create a contract
contract Rating {
	// mapping field (equivalent to an associative array or hash)

	mapping (bytes32 => uint8) public ratings_recieved;

	// list of movies
	bytes32[] public movie_list;

	/* A constructor which will be called when the contract is
	deployed in the blockchain. While deploying the contract, a 
	list of movie names will be passed for which user ratings will \
	be recorded.
	*/

	constructor (bytes32[] memory movie_names) public {
		movie_list = movie_names;
	}

	// A function that returns the number of ratings recieved for a 
	// particular movie
	function total_votes_for(bytes32 movie) view public returns (uint8) {
		return ratings_recieved[movie];
	}

	// A function to increment vote count by one (for the given movie)
	function vote_for(bytes32 movie) public {
		ratings_recieved[movie] += 1;
	}
} 