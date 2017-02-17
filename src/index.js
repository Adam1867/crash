import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Setup from './containers/Setup';
import Game from './containers/Game';

import './index.css';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Setup} />
				<Route path="setup" component={Setup} />
				<Route path="game" component={Game} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
