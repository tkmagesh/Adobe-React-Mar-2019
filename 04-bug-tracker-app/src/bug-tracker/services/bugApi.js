import axios from 'axios';

function getAll(){
	/*
	var p = axios.get('http://localhost:3030/bugs');
	var p2 = p.then(response => response.data)
	return p2;
	*/

	return axios
		.get('http://localhost:3030/bugs')
		.then(response => response.data);
}

let bugApi = { 
	getAll
}

export default bugApi;