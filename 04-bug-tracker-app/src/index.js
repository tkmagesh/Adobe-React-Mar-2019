import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BugTracker from './bug-tracker';
import { Provider } from 'mobx-react';

//import * as serviceWorker from './serviceWorker';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
import bugsCollection from './bug-tracker/models/bugsCollection';
import * as mobx from 'mobx';
window['mobx'] = mobx;
window['bugsCollection'] = bugsCollection;


ReactDOM.render(
	<Provider bugsModel={bugsCollection} >
		<BugTracker/>
	</Provider>
	, document.getElementById('root'));
