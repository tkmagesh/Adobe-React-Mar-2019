import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import productsModel from './models/products';
import ProductsCount from './views/productsCount';
import ProductList from './views/productList';

import * as serviceWorker from './serviceWorker';
import {observe } from 'mobx';

window['model'] = productsModel;

observe(productsModel.products, function renderProducts(){

	ReactDOM.render(
		<div>
			<ProductsCount data={productsModel.getAll().length} />
			<ProductList model={productsModel}/>
		</div>,
		document.getElementById('root'));
}, true);

//renderProducts();

//model.subscribe(renderProducts);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
