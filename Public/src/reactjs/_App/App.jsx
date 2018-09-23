/*
 * Modules
 */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loadable from 'react-loadable';



/*
 * Components
 */
 
import { PageLoaderComponent as ReactLoadableComponent, 
		 NotFoundPageErrorComponent as NotFoundErrorComponent } from '../_components';



/*
 * Lazy-load Components 
 */

//  Homepage
const Homepage = Loadable({
    loader: () => import('../Homepage/Homepage/Homepage' /* webpackChunkName: 'homepage' */).then(module => module.Homepage),
	loading: ReactLoadableComponent
});

// Testing
const Testing = Loadable({
    loader: () => import('../Testing/Testing/Testing' /* webpackChunkName: 'testing' */).then(module => module.Testing),
	loading: ReactLoadableComponent
});



/*
 * Routing
 */
 
class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<div>Header</div>
				
				<div>
					<Switch>
						<Route exact path="/" component={(props) => <Homepage {...props} />} />
						<Route path="/testing" component={(props) => <Testing {...props} />} />
						<Route component={NotFoundErrorComponent} />
					</Switch>
				</div>

				<div>Footer</div>
			</div>
		);
	}
}



export { App };