import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import BugItem from './views/bugItem';
import BugStats from './views/bugStats';
import BugEdit from './views/bugEdit';

@inject('bugsModel')
@observer
class BugTracker extends Component{
	componentDidMount(){
		this.props.bugsModel.load();
	}
	render(){
		console.log(this.props);
		let model = this.props.bugsModel,
			bugs = model.getAll(),
			bugItems = bugs.map((bug, index) => (
				<BugItem bug={bug} key={index}/>
			));
		return(
			<>
				<BugStats bugsCount={bugs.length} closedCount={model.closedCount} />
				<section className="sort">
					<label htmlFor="">Order By :</label>
					<select name="" id="">
						<option value=""></option>
						<option value=""></option>
					</select>
					<label htmlFor="">Descending ? :</label>
					<input type="checkbox" name="" id="" />
				</section>
				<BugEdit addNew={model.addNew} />
				<section className="list">
					<ol>
						{bugItems}
					</ol>
					<input type="button" value="Remove Closed" onClick={() => model.removeClosed()} />
				</section>
			</>
		)
	}
}

export default BugTracker;