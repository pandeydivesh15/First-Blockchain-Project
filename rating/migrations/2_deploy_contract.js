var Ratings = artifacts.require("./Rating.sol");

module.exports = function(deployer) {
	deployer.deploy(
		Ratings, 
		[
			web3.utils.utf8ToHex('The Avengers (2012)'), 
			web3.utils.utf8ToHex('Avengers: Age of Ultron (2015)'),
		 	web3.utils.utf8ToHex('Avengers: Infinity War (2018)'),
		 	web3.utils.utf8ToHex('Avengers: Endgame (2019)')],
		{gas: 6700000});
};