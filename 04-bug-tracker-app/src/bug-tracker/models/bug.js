class Bug {
	name = '';
	isClosed = false;
	createdAt = new Date();

	constructor(name){
		this.name = name;
	}

	toggle(){
		this.isClosed = !this.isClosed;
	}
}

export default Bug;