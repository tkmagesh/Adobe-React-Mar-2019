import React from 'react';

let BugStats = ({bugsCount, closedCount}) => (
	<section className="stats">
		<span className="closed">{closedCount}</span>
		<span> / </span>
		<span>{bugsCount}</span>
	</section>
);

export default BugStats;