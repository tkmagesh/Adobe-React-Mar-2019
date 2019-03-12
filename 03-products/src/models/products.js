import EventEmitter from './eventEmitter';

class Products extends EventEmitter{
	list = [];

	getAll(){
		return [...this.list];
	}
	getCount(){
		return this.list.length;
	}
	addNew(productName){
		this.list.push(productName);
		this.triggerChange();
	}

}
export default Products;