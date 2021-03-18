import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';

export default class Routes extends Component {
	constructor() {
		super();
	}

	
    render() {
    	return (
	        <BrowserRouter>
				<Switch>
					<Route 
						path='/' 
						exact 
						component={props => (
							<Home {... props}/>
						)}
					/>		
				</Switch>
	        </BrowserRouter>
    	);
	}
}