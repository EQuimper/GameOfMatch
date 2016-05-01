'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import configureStore from './store/configure-store';
import { renderDevTools } from './utils/dev-tools';

import App from './components/App';
import Login from './components/Login';
import NoMatch from './components/NoMatch';

const store = configureStore();

const { initializeIndex } = bindActionCreators(store.dispatch);

let wrapperGenerator = (Component) => {
	return (props) => {
		return (
			<div>
				<Provider store={store}>
					<Component {...props} />
				</Provider>
				{renderDevTools(store)}
			</div>
		);
	};
};

var Routes = (
	<Router history={browserHistory}>
		<Route path="/" component={wrapperGenerator(App)}>
			<Route path="login" component={Login}/>
			<Route path="*" component={NoMatch}/>
		</Route>
	</Router>
);

// store.dispatch(initializeIndex());

var Wrapper = wrapperGenerator(App);

ReactDOM.render(Routes, document.getElementById('app'));
