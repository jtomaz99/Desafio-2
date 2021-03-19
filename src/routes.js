import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Articles from './pages/articles';
import Profile from './pages/profile';

export default class Routes extends Component {

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

					<Route 
						path='/articles' 
						exact 
						component={props => (
							<Articles {... props}/>
						)}
					/>	

					<Route 
						path='/profile' 
						exact 
						component={props => (
							<Profile {... props}/>
						)}
					/>	
				</Switch>
	        </BrowserRouter>
    	);
	}
}