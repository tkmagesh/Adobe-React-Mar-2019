import { observable, computed, action } from 'mobx';

import Bug from './bug';

class BugsCollection{

	@observable _list = [];

	getAll(){
		return [...this._list];
	}

	@computed
	get closedCount(){
		return this._list.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}

	@action
	addNew(bugName){
		let newBug = new Bug(bugName);
		this._list.push(newBug);
	}

	@action
	removeClosed(){
		this._list = this._list.filter(bug => !bug.isClosed);

	}

	
}

let bugsCollection = new BugsCollection();

export default bugsCollection;