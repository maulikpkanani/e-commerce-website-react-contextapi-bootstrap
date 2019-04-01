import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	state = {};

	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Switch>
					<Route exact path="/" component={ProductList} />
					<Route path="/details" component={Details} />
					<Route path="/Cart" component={Cart} />
					<Route component={Default} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;