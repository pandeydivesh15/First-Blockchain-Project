import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

let ratingABI = [{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ratings_recieved","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x5f7cb615"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"movie_list","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xb7652c91"},{"inputs":[{"name":"movie_names","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"constant":true,"inputs":[{"name":"movie","type":"bytes32"}],"name":"total_votes_for","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xd10414f3"},{"constant":false,"inputs":[{"name":"movie","type":"bytes32"}],"name":"vote_for","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x91214e20"}]
let ratingAddress = '0x6DaA2bF4537198e9E1A0998DF0f4eBcC625226ED'

web3.eth.defaultAccount = web3.eth.accounts[0]


const ratingContract = web3.eth.contract(ratingABI).at(ratingAddress)

export{ratingContract};