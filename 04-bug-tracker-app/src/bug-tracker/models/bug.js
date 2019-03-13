import { observable, action } from 'mobx';



class Bug {
	@observable name = '';
	@observable isClosed = false;
	createdAt = new Date();

	constructor(name){
		this.name = name;
	}

	@action
	toggle(){
		this.isClosed = !this.isClosed;
	}
}

/*decorate(Bug,
{
	name : observable,
	isClosed : observable,
	toggle : action
});*/

export default Bug;