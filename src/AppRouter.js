import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import AuthorizedRoute from './components/AuthorizedRoute';

import Home from './screens/Home';
import Account from './screens/Account';
import Events from './screens/Events';
import Profile from './screens/Profile';
import About from './screens/About';
import AddEvent from './screens/AddEvent';
import NotFound from './screens/NotFound';

class AppRouter extends Component{
	render(){
		return(
			<BrowserRouter>
				<div>
					<Switch>
						<Redirect exact from='/' to='/home'/>
						<AuthorizedRoute exact path='/events' component={Events}/>
						<AuthorizedRoute exact path='/account/profile' component={Profile}/>
						<Route exact path='/home' component={Home}/>
						<Route exact path='/account' component={Account}/>
						<Route exact path='/about' component={About}/>
						<Route exact path='/add' component={AddEvent}/>
						<Route component={NotFound}/>
					</Switch>
					<NavigationBar/>
				</div>
		</BrowserRouter>
		)
	}
}

export default AppRouter;
