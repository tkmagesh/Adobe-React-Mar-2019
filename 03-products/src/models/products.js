import { observable, action, toJS } from 'mobx';

/*class Products extends EventEmitter{
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
export default Products;*/

let _products = observable([]);

let getAll = () => toJS(_products);

let addNew = action((productName) => _products.push(productName));

let productsModel = { getAll, addNew, products : _products };

export default productsModel;