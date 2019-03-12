import React, { Component } from 'react';

class ProductList extends Component{
	state = { newProductName : '' };
	render = () => {
		let products = this.props.model.getAll();
		let productItems = products.map((product, index) => (<li key={index}>{product}</li>));

		return(
			<div>
				<label>Product Name :</label>
				<input type="text" onChange = { evt => this.setState({ newProductName : evt.currentTarget.value }) }/>
				<input type="button" value="Add New" onClick = { () => this.props.model.addNew(this.state.newProductName)}/>
				<ol>
					{productItems}
				</ol>
			</div>
		);
	}
}

export default ProductList;