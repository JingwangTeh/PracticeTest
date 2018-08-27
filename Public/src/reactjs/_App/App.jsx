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
 * Functions
 */
 
// import { mainUtilityFunctions as func_mainUtility } from '../_functions';



/*
 * Lazy-load Components 
 */

const Test1 = Loadable({
    loader: () => import('../Testing/TestRoute/Test1' /* webpackChunkName: 'test1' */).then(module => module.Test1),
	loading: ReactLoadableComponent
});
const Test2 = Loadable({
    loader: () => import('../Testing/TestRoute/Test2' /* webpackChunkName: 'test2' */).then(module => module.Test2),
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
		// test
		// func_mainUtility.appendComp();
		
		return (
			<div>
				<div>Header</div>
				
				<div>
					<Switch>
						<Route exact path="/" component={(props) => <Test1 {...props} />} />
						<Route path="/test1" component={(props) => <Test1 {...props} />} />
						<Route path="/test2" component={(props) => <Test2 {...props} />} />
						<Route component={NotFoundErrorComponent} />
					</Switch>
				</div>

				<div>Footer</div>
			</div>
		);
	}
}



export { App };