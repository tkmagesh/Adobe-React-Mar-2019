
import EventEmitter from './eventEmitter';
import Bug from './bug';

class BugsCollection extends EventEmitter{

	_list = [];

	getAll(){
		return [...this._list];
	}

	addNew(bugName){
		let newBug = new Bug(bugName);
		this._list.push(newBug);
		this.triggerChange();
	}
}

let bugsCollection = new BugsCollection();

export default bugsCollection;