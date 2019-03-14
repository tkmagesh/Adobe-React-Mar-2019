import { observable, computed, action, runInAction } from 'mobx';

import Bug from './bug';
import bugApi from '../services/bugApi'

class BugsCollection{

	@observable _list = [];

	getAll(){
		return [...this._list];
	}

	@action
	async load(){
		let bugs = await bugApi.getAll()
		runInAction(() => {
			this._list = bugs;	
		});
		
		/*this.sadfdsa
		this.sasfdas
		this.asdfdas*/

	}

	@computed
	get closedCount(){
		return this._list.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}

	@action.bound
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