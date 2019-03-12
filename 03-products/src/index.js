import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Products from './models/products';
import ProductsCount from './views/productsCount';
import ProductList from './views/productList';

import * as serviceWorker from './serviceWorker';

let model = new Products();

function renderProducts(){
	ReactDOM.render(
		<div>
			<ProductsCount data={model.getCount()} />
			<ProductList model={model}/>
		</div>,
		document.getElementById('root'));
}
renderProducts();

model.subscribe(renderProducts);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
