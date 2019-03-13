import React, { Component } from 'react';

import BugItem from './views/bugItem';

class BugTracker extends Component{
	state = { newBugName : ''};
	onAddNewClick = () => {
		this.props.model.addNew(this.state.newBugName);
	}

	render(){
		let { model } = this.props,
			bugs = model.getAll(),
			bugItems = bugs.map((bug, index) => (
				<BugItem bug={bug} key={index}/>
			));
		return(
			<>
				<section className="stats">
					<span className="closed">1</span>
					<span> / </span>
					<span>{bugs.length}</span>
				</section>
				<section className="sort">
					<label htmlFor="">Order By :</label>
					<select name="" id="">
						<option value=""></option>
						<option value=""></option>
					</select>
					<label htmlFor="">Descending ? :</label>
					<input type="checkbox" name="" id="" />
				</section>
				<section className="edit">
					<label htmlFor="">Bug Name :</label>
					<input type="text" onChange={evt => this.setState({ newBugName : evt.currentTarget.value})} />
					<input type="button" value="Add New" onClick={this.onAddNewClick}/>
				</section>
				<section className="list">
					<ol>
						{bugItems}
					</ol>
					<input type="button" value="Remove Closed" />
				</section>
			</>
		)
	}
}

export default BugTracker;