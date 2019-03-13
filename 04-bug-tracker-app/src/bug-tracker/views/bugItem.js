import React, { Component } from 'react';
import { observer } from 'mobx-react';

class BugItem extends Component{
	onBugNameClick = () => {
		this.props.bug.toggle();
	}
	render(){
		let { bug } = this.props;
		return(
			<li>
				{
					bug.isClosed ? 
					( <span className="bugname closed" onClick={this.onBugNameClick}>
						{bug.name}
					  </span>
					 ) : 
					( <span className="bugname" onClick={this.onBugNameClick}>
						{bug.name}
					  </span>
					 )

				}
				<div className="datetime">[Created At]</div>
			</li>
		)
	}
}

export default BugItem;