/*
 * Modules
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { Provider } from 'react-redux';



/*
 * Components
 */

import { storeHelpers as store, 
         historyHelpers as history } from './_helpers';
import { App } from './_App';



/*
 * SCSS (applied throughout app)
 */
 
import '../css/style.css';
import '../css/style.scss';
import '../css/scss/util/common-generalUtil-util.scss';
import '../css/scss/vendor/vendorOverwrite.scss';



/*
 * Main Component
 * -for implementing vendor components
 * -routing handled by App component
 */
 
class Index extends React.Component {
	render() {
		return (
			
			<Provider store={store}>
				<ConnectedRouter history={history}>

					<Switch>
						<Route path="/" component={App} />
					</Switch>
					
				</ConnectedRouter>
			</Provider>

		);
	}
}



/*
 * ReactDOM Render into Root div
 */
 
ReactDOM.render(
		<Index />,
		document.getElementById('root')
);



/*
 * Service Worker
 */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}