import React from 'react';

import { func_navigation } from '../../_functions';



class Test2 extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		
		return (
			<div>abc123
				<img src="/img/a.png" alt="no img" />
				<div onClick={()=>{ func_navigation.historyPushToURL(this.props, '/test1') }}>Click Me!</div>
			</div>
		);
	}
}

export { Test2 };